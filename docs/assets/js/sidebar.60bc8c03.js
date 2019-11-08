(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar"],{

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/*! exports provided: initSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSidebar\", function() { return initSidebar; });\nvar body = document.body;\nvar sidebar = body.querySelector('#sidebar');\nvar expandButton = body.querySelector('#sidebar-toggler');\nvar overlay = body.querySelector('.sidebar-overlay');\nvar sidebarMenu = body.querySelector('#sidebar-menu');\nvar collapseButton = expandButton.cloneNode(true);\ncollapseButton.setAttribute('id', '#sidebar-collapse');\n\nvar setAriaExpanded = function setAriaExpanded(items, value) {\n  items.forEach(function (item) {\n    return item.setAttribute('aria-expanded', value);\n  });\n};\n\nvar hideSidebar = function hideSidebar() {\n  sidebar.classList.remove('toggled');\n  setAriaExpanded([sidebar, expandButton, collapseButton], false);\n};\n\nvar showSidebar = function showSidebar() {\n  sidebar.classList.add('toggled');\n  setAriaExpanded([sidebar, expandButton, collapseButton], true);\n  sidebar.focus();\n};\n\nvar windowWidth,\n    windowHeight,\n    bodyHeight,\n    sidebarHeight,\n    windowPos,\n    lastWindowPos = 0,\n    top = false,\n    bottom = false,\n    topOffset = 0,\n    sidebarOffsetTop,\n    resizeTimer;\n\nvar resizeHandler = function resizeHandler() {\n  windowWidth = window.innerWidth;\n  windowHeight = window.innerHeight;\n};\n\nvar scrollHandler = function scrollHandler() {\n  windowPos = window.scrollY;\n  bodyHeight = body.offsetHeight;\n  sidebarHeight = sidebar.offsetHeight;\n  sidebarOffsetTop = Math.round(windowPos + sidebar.getBoundingClientRect().top);\n\n  if (sidebarHeight > windowHeight) {\n    if (windowPos > lastWindowPos) {\n      if (top) {\n        top = false;\n        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0;\n        sidebar.setAttribute('style', \"top: \".concat(topOffset, \"px;\"));\n      } else if (!bottom && windowPos + windowHeight > sidebarHeight + sidebarOffsetTop && sidebarHeight < bodyHeight) {\n        bottom = true;\n        sidebar.setAttribute('style', 'position: fixed; bottom: 0;');\n      }\n    } else if (windowPos < lastWindowPos) {\n      if (bottom) {\n        bottom = false;\n        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0;\n        sidebar.setAttribute('style', \"top: \".concat(topOffset, \"px;\"));\n      } else if (!top && windowPos < sidebarOffsetTop) {\n        top = true;\n        sidebar.setAttribute('style', 'position: fixed;');\n      }\n    } else {\n      top = bottom = false;\n      topOffset = sidebarOffsetTop ? sidebarOffsetTop : 0;\n      sidebar.setAttribute('style', \"top: \".concat(topOffset, \"px;\"));\n    }\n  } else if (!top) {\n    top = true;\n    sidebar.setAttribute('style', 'position: fixed;');\n  }\n\n  lastWindowPos = windowPos;\n};\n\nvar resizeAndScrollHandler = function resizeAndScrollHandler() {\n  resizeHandler();\n  scrollHandler();\n};\n\nvar initSidebarMenu = function initSidebarMenu() {\n  var itemsWithSubmenu = sidebarMenu.querySelectorAll('.item.has-children');\n  itemsWithSubmenu.forEach(function (item) {\n    var toggler = item.querySelector('button');\n    var submenu = item.querySelector('.sub-menu');\n    setAriaExpanded([submenu, toggler], false);\n    toggler.addEventListener('click', function () {\n      var toggled = item.classList.contains('toggled');\n      item.classList[toggled ? 'remove' : 'add']('toggled');\n      setAriaExpanded([submenu, toggler], !toggled);\n    });\n  });\n};\n\nvar initSidebar = function initSidebar() {\n  sidebar.setAttribute('tabindex', '-1');\n  sidebar.insertBefore(collapseButton, sidebar.children[1]);\n  setAriaExpanded([sidebar, expandButton, collapseButton], false);\n  expandButton.addEventListener('click', showSidebar);\n  collapseButton.addEventListener('click', hideSidebar);\n  overlay.addEventListener('click', hideSidebar);\n  window.addEventListener('scroll', scrollHandler);\n  window.addEventListener('resize', function () {\n    clearTimeout(resizeTimer);\n    resizeTimer = setTimeout(resizeAndScrollHandler, 500);\n  });\n  resizeAndScrollHandler();\n  if (sidebarMenu) initSidebarMenu();\n};\n\n//# sourceURL=webpack:///./src/scripts/sidebar.js?");

/***/ })

}]);