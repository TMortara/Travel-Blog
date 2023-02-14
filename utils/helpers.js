module.exports = {
   format_time: (date) => {
     return date.toLocaleTimeString();
   },
   format_date: (date) => {
     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
       new Date(date).getFullYear()
     }`;
   },
   format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  
  /* 
    this helper will only show 10 words from the "trip_description"
  */
  trip_description_trim: (str) => {
    const word_count = str.split(' ').length;

    if(word_count <= 10){
      return str.split(/\s+/).slice(0,10).join(" ");
    } else {
      return str.split(/\s+/).slice(0,10).join(" ") + ' ...';
    }
  }
 };
 