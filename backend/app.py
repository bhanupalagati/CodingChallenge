from flask import Flask, jsonify, request, abort
from flask_restful import Api, Resource
from flask_cors import CORS
import requests
import json
# Main server spawn code
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)
jsonFile = open('processedPlaylist.json')
jsonFileOriginal = open('playlist.json')
db = json.load(jsonFile)
originalData = json.load(jsonFileOriginal)
jsonFile.close()
jsonFileOriginal.close()

# pagination code
def get_paginated_list(url, start, limit, results=db['songs']):
    """
    Returns a paginated response with count, next, previous, and results
    """
    start = int(start)
    limit = int(limit)
    count = len(results)
    if count < start or limit < 0:
        abort(404)
    # make response
    obj = {}
    obj['start'] = start
    obj['limit'] = limit
    obj['count'] = count
    # make URLs
    # make previous url
    if start == 1:
        obj['previous'] = ''
    else:
        start_copy = max(1, start - limit)
        limit_copy = start - 1
        obj['previous'] = url + '?start=%d&limit=%d' % (start_copy, limit_copy)
    # make next url
    if start + limit > count:
        obj['next'] = ''
    else:
        start_copy = start + limit
        obj['next'] = url + '?start=%d&limit=%d' % (start_copy, limit)
    # finally extract result according to bounds
    obj['results'] = results[(start - 1):(start - 1 + limit)]
    return obj


# Routes
class Songs(Resource):
    def get(self):
        start = request.args.get('start', 1)
        limit=request.args.get('limit', 20)
        return jsonify(get_paginated_list('/songs', start, limit))

class SingleFeature(Resource):
    def get(self):
        key = request.args.get('key', "")
        if key not in originalData:
            return jsonify({"error": "Invalid key request"})
        else:
            return jsonify(originalData[key])

class SearchSong(Resource):
    def get(self):
        key = request.args.get('key', "")
        song = next((sng for sng in db['songs'] if sng['title'] == key), None)
        return jsonify(song) if song else jsonify({"error": "Title doesnot exist"})
        

api.add_resource(Songs, "/songs")
api.add_resource(SingleFeature, "/feature")
api.add_resource(SearchSong, "/song")

if __name__ == "__main__":
    app.run(port=7999, debug=True)