'use strict';

function getPath(HTMLelement) {

    function getChildNumber(element) {
        let childNumber = 1;
    
        function includePreviousChild(childNumber, element) {
            if (element.previousElementSibling === null) {
                return childNumber;
            } else {
                childNumber += 1;
                return includePreviousChild(childNumber, element.previousElementSibling)
            }
        }
    
        return includePreviousChild(childNumber, element);
    }
    
    function addPathPart(element, startSelector) {
        if (element.tagName === 'BODY') {
            return `${element.tagName} ${startSelector}`;
        } else {
            const childNumber = getChildNumber(element);
            startSelector = `> ${element.tagName}:nth-child(${childNumber}) ${startSelector}`;
            return addPathPart(element.parentElement, startSelector);
        }
    }

    const tag = HTMLelement.tagName;

    if (tag === 'HTML' || tag === 'BODY') {
        return tag;
    } else {
        return addPathPart(HTMLelement, '')
    }
}