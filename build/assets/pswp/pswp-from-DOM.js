/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov;
* Modified by Jeffrey Scott French; */


// use slides genereated by hand for correctly sized images
var pswpElement = document.querySelectorAll('.pswp')[0];



var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data from DOM elements
    // (children of gallerySelector)



    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    var eTarget = 0; // declare (to use later) with a value (to escape errors) - by JSF

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {

        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;


        var eTarget = e.target || e.srcElement;


        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'DIV');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedGallery.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;

        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery, eTarget ); // added eTarget - by JSF
        }
        return false;

    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {

        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        if(params.pid) {
            params.pid = parseInt(params.pid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, eTarget, disableAnimation, fromURL) {  // added eTarget - by JSF
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options;
            // removed 'items' as it is defined above with array of slides - by JSF


        // define options (if needed)
        options = {
            barsSize: {top:0, bottom:0},
            preload: [1,3],
            loop: 'once',
            zoomEl: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            maxSpreadZoom: 1,
            protectImage: true, // this kills the zoom feature also
            copyrightImageOnSS: true, // adds copyright image on keypress for screen shot on Windows and Mac
            shareButtons:[
              {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
              {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
              {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
            ],
            shareImage: true, // define an alternate image src for sharing (possibly with watermark)

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            // this is only needed when animating into and out of gallery
            // getThumbBoundsFn: function(index) {
            //     // See Options -> getThumbBoundsFn section of documentation for more info
            //     var thumbnail = eTarget, // find thumbnail - already defined above as eTarget - by JSF
            //     pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            //     rect = thumbnail.getBoundingClientRect();

            //     return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            // }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options );

        // use correctly sized images for screen
        // create variable that will store real size of viewport
        var realViewportWidth,
            use640wImages,
            use960wImages,
            use1140wImages,
            use1340wImages,
            use1500wImages,
            use1750wImages,
            use2000wImages,
            use2250wImages,
            use2500wImages,
            firstResize = true,
            imageSrcWillChange;


        // beforeResize event fires each time size of gallery viewport updates
        gallery.listen('beforeResize', function() {
            // gallery.viewportSize.x - width of PhotoSwipe viewport
            // gallery.viewportSize.y - height of PhotoSwipe viewport
            // window.devicePixelRatio - ratio between physical pixels and device independent pixels (Number)
            //                          1 (regular display), 2 (@2x, retina) ...


            // calculate real pixels when size changes
            realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

            // Code below is needed if you want image to switch dynamically on window.resize

            // Find out if current images need to be changed
            if( (use960wImages || use1140wImages || use1340wImages || use1500wImages || use1750wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth <= 640)
                use640wImages = true,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false,
                imageSrcWillChange = true;
            else if( (use640wImages || use1140wImages || use1340wImages || use1500wImages || use1750wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth > 640 && realViewportWidth <= 960) {
                use640wImages = false,
                use960wImages = true,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false,
                imageSrcWillChange = true;
            } else if( (use640wImages || use960wImages || use1340wImages || use1500wImages || use1750wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth > 960 && realViewportWidth <= 1140) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = true,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false,
                imageSrcWillChange = true;
            } else if( (use640wImages || use960wImages || use1140wImages || use1500wImages || use1750wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth > 1140 && realViewportWidth <= 1340) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = true,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false,
                imageSrcWillChange = true;
            } else if( (use640wImages || use960wImages || use1140wImages || use1340wImages || use1750wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth > 1340 && realViewportWidth <= 1500) {
               use640wImages = false,
               use960wImages = false,
               use1140wImages = false,
               use1340wImages = false,
               use1500wImages = true,
               use1750wImages = false,
               use2000wImages = false,
               use2250wImages = false,
               use2500wImages = false,
               imageSrcWillChange = true;
             } else if( (use640wImages || use960wImages || use1140wImages || use1340wImages || use1500wImages || use2000wImages || use2250wImages || use2500wImages) && realViewportWidth > 1500 && realViewportWidth <= 1750) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = true,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false,
                imageSrcWillChange = true;
              } else if( (use640wImages || use960wImages || use1140wImages || use1340wImages || use1500wImages || use1750wImages || use2250wImages || use2500wImages) && realViewportWidth > 1750 && realViewportWidth <= 2000) {
                 use640wImages = false,
                 use960wImages = false,
                 use1140wImages = false,
                 use1340wImages = false,
                 use1500wImages = false,
                 use1750wImages = false,
                 use2000wImages = true,
                 use2250wImages = false,
                 use2500wImages = false,
                 imageSrcWillChange = true;
               } else if( (use640wImages || use960wImages || use1140wImages || use1340wImages || use1500wImages || use1750wImages || use2000wImages || use2500wImages) && realViewportWidth > 2000 && realViewportWidth <= 2250) {
                  use640wImages = false,
                  use960wImages = false,
                  use1140wImages = false,
                  use1340wImages = false,
                  use1500wImages = false,
                  use1750wImages = false,
                  use2000wImages = false,
                  use2250wImages = true,
                  use2500wImages = false,
                  imageSrcWillChange = true;
                } else if( (use640wImages || use960wImages || use1140wImages || use1340wImages || use1500wImages || use1750wImages || use2000wImages || use2250wImages) && realViewportWidth >= 2250) {
                   use640wImages = false,
                   use960wImages = false,
                   use1140wImages = false,
                   use1340wImages = false,
                   use1500wImages = false,
                   use1750wImages = false,
                   use2000wImages = false,
                   use2250wImages = false,
                   use2500wImages = true;
                   imageSrcWillChange = true;
                 } else {
                   use640wImages = false,
                   use960wImages = false,
                   use1140wImages = false,
                   use1340wImages = true,
                   use1500wImages = false,
                   use1750wImages = false,
                   use2000wImages = false,
                   use2250wImages = false,
                   use2500wImages = false,
                   imageSrcWillChange = false;
                 }

            // Invalidate items only when source is changed and when it's not the first update
            if(imageSrcWillChange && !firstResize) {
                // invalidateCurrItems sets a flag on slides that are in DOM,
                // which will force update of content (image) on window.resize.
                gallery.invalidateCurrItems();
            }

            if(firstResize) {
                firstResize = false;
            }

            imageSrcWillChange = false;

        });


        // make sure images are maximized after loading / resizing - by JSF
        var autoZoom = function() {
      		gallery.zoomTo(gallery.currItem.fitRatio, {x:gallery.viewportSize.x/2,y:gallery.viewportSize.y/2}, 1, false, function(now){})
      	};

        gallery.listen('imageLoadComplete', function() {
          if ( gallery.currItem.h !== 'undefined' ) {
            if ( gallery.viewportSize.y !== gallery.currItem.h ) {
              autoZoom();
            }
            else {
              return;
            }
          }
        });

        gallery.listen('resize', function() {
          if ( gallery.currItem.h !== 'undefined' ) {
            if ( gallery.viewportSize.y !== gallery.currItem.h ) {
              autoZoom();
            }
            else {
              return;
            }
          }
        });

        gallery.listen('afterChange', function() {
          if ( gallery.currItem.h !== 'undefined' ) {
            if ( gallery.viewportSize.y !== gallery.currItem.h ) {
              autoZoom();
            }
            else {
              return;
            }
          }
        });

        // gettingData event fires each time PhotoSwipe retrieves image source & size
        gallery.listen('gettingData', function(index, item) {

            // Set image source & size based on real viewport width


            realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

            if( realViewportWidth <= 640 )
                use640wImages = true,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false;
            else if( realViewportWidth > 640 && realViewportWidth <= 960 ) {
                use640wImages = false,
                use960wImages = true,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false;
            } else if( realViewportWidth > 960 && realViewportWidth <= 1140 ) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = true,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false;
            } else if( realViewportWidth > 1140 && realViewportWidth <= 1340 ) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = true,
                use1500wImages = false,
                use1750wImages = false,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false;
            } else if( realViewportWidth > 1340 && realViewportWidth <= 1500 ) {
               use640wImages = false,
               use960wImages = false,
               use1140wImages = false,
               use1340wImages = false,
               use1500wImages = true,
               use1750wImages = false,
               use2000wImages = false,
               use2250wImages = false,
               use2500wImages = false;
             } else if( realViewportWidth > 1500 && realViewportWidth <= 1750 ) {
                use640wImages = false,
                use960wImages = false,
                use1140wImages = false,
                use1340wImages = false,
                use1500wImages = false,
                use1750wImages = true,
                use2000wImages = false,
                use2250wImages = false,
                use2500wImages = false;
              } else if( realViewportWidth > 1750 && realViewportWidth <= 2000 ) {
                 use640wImages = false,
                 use960wImages = false,
                 use1140wImages = false,
                 use1340wImages = false,
                 use1500wImages = false,
                 use1750wImages = false,
                 use2000wImages = true,
                 use2250wImages = false,
                 use2500wImages = false;
               } else if( realViewportWidth > 2000 && realViewportWidth <= 2250 ) {
                  use640wImages = false,
                  use960wImages = false,
                  use1140wImages = false,
                  use1340wImages = false,
                  use1500wImages = false,
                  use1750wImages = false,
                  use2000wImages = false,
                  use2250wImages = true,
                  use2500wImages = false;
                } else if(  realViewportWidth >= 2250 ) {
                   use640wImages = false,
                   use960wImages = false,
                   use1140wImages = false,
                   use1340wImages = false,
                   use1500wImages = false,
                   use1750wImages = false,
                   use2000wImages = false,
                   use2250wImages = false,
                   use2500wImages = true;
                 };


            if( use640wImages ) {
                item.src = item._640Image.src;
                item.w = item._640Image.w;
                item.h = item._640Image.h;
            } else if ( use960wImages ) {
                item.src = item._960Image.src;
                item.w = item._960Image.w;
                item.h = item._960Image.h;
            } else if ( use1140wImages ){
                item.src = item._1140Image.src;
                item.w = item._1140Image.w;
                item.h = item._1140Image.h;
            } else if ( use1340wImages ){
                item.src = item._1340Image.src;
                item.w = item._1340Image.w;
                item.h = item._1340Image.h;
            } else if ( use1500wImages ){
                item.src = item._1500Image.src;
                item.w = item._1500Image.w;
                item.h = item._1500Image.h;
            } else if ( use1750wImages ){
                item.src = item._1750Image.src;
                item.w = item._1750Image.w;
                item.h = item._1750Image.h;
            } else if ( use2000wImages ){
                item.src = item._2000Image.src;
                item.w = item._2000Image.w;
                item.h = item._2000Image.h;
            } else if ( use2250wImages ){
                item.src = item._2250Image.src;
                item.w = item._2250Image.w;
                item.h = item._2250Image.h;
            } else if ( use2500wImages ){
                item.src = item._2500Image.src;
                item.w = item._2500Image.w;
                item.h = item._2500Image.h;
            } else {
                item.src = item._1340Image.src;
                item.w = item._1340Image.w;
                item.h = item._1340Image.h;
            }





            // It doesn't really matter what will you do here,
            // as long as item.src, item.w and item.h have valid values.
            //
            // Just avoid http requests in this listener, as it fires quite often


        });


        // Note that init() method is called after gettingData event is bound
        // gallery.init();
        //
        //
        // end correctly sized images section

        gallery.init();

    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }



};

// execute above function
initPhotoSwipeFromDOM('.js-pswp_gallery');
