const pyramidHeight = 5;

for (let i = 1; i <= pyramidHeight; i++) {
    console.log(' '.repeat(pyramidHeight - i) + '*'.repeat(i) + '*'.repeat(i - 1));
}