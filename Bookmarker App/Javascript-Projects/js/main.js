// listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

// Save Bookmark
function saveBookmark(e) {

// Get the values
var sitename=document.getElementById('sitename').value;
var siteurl=document.getElementById('siteurl').value;

var bookmark={
  name:sitename,
  url:siteurl
}

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks')===null){
    // Init array
    var bookmarks=[];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

  }
    else
     {
      //  Get bookmarks from localStorage
       var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
      //  Add bookmark to array
        bookmarks.push(bookmark);
        //Re-set back to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

     }
     // refetch bookmarks
     fetchBookmarks();
     
// Prevent  form from submitting
  e.preventDefault();

}

// fetch bookmarks
function fetchBookmarks() {

    // get bookmarks
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    // get output id
    var bookmarksResults=document.getElementById('bookmarksResults');

    // build output
    bookmarksResults.innerHTML="";

    bookmarks.forEach(function (element){
      var name=element.name;
      var url=element.url;

      bookmarksResults.innerHTML+='<div class="well">'+
                                  '<h3>'+name+
                                  '<a class="btn btn-default" target="_blank" href="'+url+'">visit</a>'+
                                  '<a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\')"  href="#">Delete</a>'+
                                  '</h3>'+
                                  '</div>';
    });

}


function deleteBookmark(url){
  // get bookmarks
  var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url==url) {
      // remove from array
      bookmarks.splice(i,1);
    }
  }
  //Re-set back to localStorage
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

  // refetch bookmarks
  fetchBookmarks();

}
