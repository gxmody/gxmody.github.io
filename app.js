document.getElementById('compare-btn').addEventListener('click', function() {
    const item1 = document.getElementById('item1-search').value;
    const item2 = document.getElementById('item2-search').value;
    
    if (!item1 || !item2) {
        alert('Please enter both items to compare!');
        return;
    }
    
    // For now, just display the names - you'll add real comparison later
    document.getElementById('item1-display').innerHTML = `<h3>${item1}</h3>`;
    document.getElementById('item2-display').innerHTML = `<h3>${item2}</h3>`;
    
    console.log(`Comparing ${item1} with ${item2}`);
});