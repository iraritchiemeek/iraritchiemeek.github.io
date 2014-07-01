# Behavior Drill Post It Board V1 
 
##Learning Competencies

- OOJS 
- Javascript event binding

##Summary 

 Did you know that I invented post-its?  Pinterest totally copied my idea.

In this challenge, we'll be re-creating the post-it boards of yore on the browser.  The purpose is to become better acquainted with object-oriented design and the nuances of event binding.

To solve this challenge, you'll need to utilize the following tools:

- [jQuery UI](http://jqueryui.com/)
- [The HTML `contenteditable` attribute](https://developer.mozilla.org/en-US/docs/HTML/Content_Editable)

## Objectives

### Make a Post-It Board

All of the HTML and CSS has been written, you only need to add your own jQuery (and jQuery UI) flavored JavaScript.

By the way, just because the HTML and CSS is provided for you doesn't mean that you shouldn't look it over.  Never know what you might learn from a little browsing.

Your job is to figure out how to accurately model the components of this application in JavaScript, giving each object the appropriate properties and behavior.  A rudimentary skeleton has been provided for you, outlining two primary objects.  You can define any other objects you think you may need, though.

When you are finished, the program should behave as follows:

<iframe width="640" height="480" src="http://www.youtube.com/embed/nkk_xOuSIok?rel=0" frameborder="0" allowfullscreen></iframe>

Notice the various features of this program:

- When the user clicks anywhere on the `Board`, a new `PostIt` is generated.
- `PostIt` objects have a `header` and a `content` area, which is editable.
- `PostIt` objects can be moved by clicking and dragging the `header`.
- A `PostIt` can be deleted by clicking on the `X` in the header.
- The `content` area of a `PostIt` is *editable*, even though it is not a `form` element like `<textarea>` or `<input>`.

Some edge cases to watch out for:

- When a user clicks on a post-it, does it place the cursor within that post-it or does it frustratingly generate a new post-it?  *Hint:* you may want to check out the `event.stopPropagation()` method in jQuery.
- Can you drag by the header area only?  Draging by the content area might give you some headaches.

Extra credit:

- Make post-its resizable.
- Allow users to replace a post-it with an image by specifying the url.
- **2x Bonus** points: use [markdown syntax](http://daringfireball.net/projects/markdown/) to parse an image url from the text content of the post-it. 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources
