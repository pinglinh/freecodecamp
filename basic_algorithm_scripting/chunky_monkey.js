function chunkArrayInGroups(arr, size) {
  var chunks = [];
  var i = 0;
  var n = arr.length;
  
  while (i < n) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// i += size will increment i with size therefore each time the chunk that gets sliced is moved size to the right
// Before the first push i = 0 and during the push it gets updated to size
