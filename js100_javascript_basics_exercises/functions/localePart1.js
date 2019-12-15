function extractLanguage(code) {
  let tempArray = code.split('_');
  console.log(tempArray[0]);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

function extractRegion(code) {
  console.log(code.split('_')[1].split('.')[0]);
}
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'