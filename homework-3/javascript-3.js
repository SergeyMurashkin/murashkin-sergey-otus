'use strict';

function getPath(elem) {

    function getChildNumber(elem) {
        let childNumber = 1;
    
        function includePreviousChild(childNumber, element) {
            if (element.previousElementSibling === null) {
                return childNumber;
            } else {
                childNumber += 1;
                return includePreviousChild(childNumber, element.previousElementSibling)
            }
        }
    
        return includePreviousChild(childNumber, elem);
    }
    
    function addPathPart(el, startSelector) {
        if (el.tagName === 'BODY') {
            return `${el.tagName} ${startSelector}`;
        } else {
            const childNumber = getChildNumber(el);
            startSelector = ` > ${el.tagName}:nth-child(${childNumber}) ${startSelector}`;
            return addPathPart(el.parentElement, startSelector);
        }
    }

    if (elem.tagName === 'HTML' || elem.tagName === 'BODY') {
        return elem.tagName;
    } else {
        return addPathPart(elem, '')
    }
}