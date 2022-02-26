import json;

# Reading data from JSON
jsonFile = open('playlist.json')
data = json.load(jsonFile)

# Intializing preprocessing
processedData = {}
processedData['songs'] = []
# getting keys rather than hardcoding will save time and avoid typos
keys = data.keys()
for i in range(100):
    # 100 songs preprocessed
    song = {}
    for key in keys:
        song[key] = data[key][str(i)]
    song["index"] = i
    song["rating"] = 0
    processedData['songs'].append(song)

# Saving the data in json to avoid on the fly computations
newFile = open("processedPlaylist.json", "w")
json.dump(processedData, newFile)

# Closing the files
jsonFile.close()
newFile.close()