const groupAnagrams = (strs) => {
    let groups = {};
    strs.forEach((e) => {
        const eSort = e.split('').sort().join();
        if (!groups[eSort]) groups[eSort] = [e];
        else groups[eSort].push(e);
    });
    return Object.values(groups);
};

console.log(groupAnagrams(["a"]));
