function formatDate(date) {
  // format from M/D/YYYY to YYYYMMDD
return date.split('/').reverse().join('');
}
