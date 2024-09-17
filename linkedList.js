function Node(value = null, next = null) {
    this.value = value;
    this.next = next;
}

function LinkedList() {
    let list = new Node();

    this.show = function () {
        console.log(list);
    };

    this.append = function (value) {
        let head = list.value;
        if (head == null) {
            list = new Node(value);
        } else {
            let tmp = list;
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = new Node(value);
        }
    };

    this.prepend = function (value) {
        let head = list.value;
        if (head == null) {
            list = new Node(value);
        } else {
            let tmp = list;
            list = new Node(value, tmp);
        }
    };

    this.size = function () {
        let size = 0;

        if (list.value == null) {
            size = 0;
        } else {
            let tmp = list;
            size = 1;
            while (tmp.next != null) {
                tmp = tmp.next;
                size++;
            }
        }
        return size;
    };

    this.head = function () {
        let head = list.value;
        return head;
    };

    this.tail = function () {
        let tail;
        let tmp = list;
        while (tmp.next != null) {
            tmp = tmp.next;
        }
        tail = tmp.value;
        return tail;
    };

    this.at = function (index) {
        let nodeAtIndex;
        let number = 0;
        if (index == 0) {
            let head = list.value;
            nodeAtIndex = head;
        } else {
            let tmp = list;
            while (tmp.next != null) {
                tmp = tmp.next;
                number++;
                if (number == index) {
                    nodeAtIndex = tmp.value;
                }
            }
        }
        return nodeAtIndex;
    };

    this.pop = function () {
        let tmp = list;

        if (tmp.value != null && tmp.next == null) {
            list = new Node();
        }

        if (tmp.next == null) {
            return null;
        }

        while (tmp.next.next != null) {
            tmp = tmp.next;
        }
        tmp.next = null;
    };

    this.contains = function (value) {
        let head = list.value;
        if (head == value) {
            return true;
        } else {
            let tmp = list;
            while (tmp.next != null) {
                tmp = tmp.next;
                if (tmp.value == value) {
                    return true;
                }
            }
            return false;
        }
    };

    this.find = function (value) {
        let head = list.value;
        let index = 0;
        if (head == value) {
            return index;
        } else {
            let tmp = list;
            while (tmp.next != null) {
                tmp = tmp.next;
                index++;
                if (tmp.value == value) {
                    return index;
                }
            }
            return false;
        }
    };

    this.toString = function () {
        let head = list.value;

        if (list.value != null && list.next == null) {
            head = ` ( ${head} )  `;
        } else if (list.value == null && list.next == null) {
            head = ` ( ${head} )  `;
        } else {
            head = ` ( ${head} ) -> `;
            let tmp = list;
            let node;
            while (tmp.next != null) {
                tmp = tmp.next;
                node = tmp.value;
                head += ` ( ${node} ) -> `;
                if (tmp.next == null) {
                    head += tmp.next;
                }
            }
        }

        return head;
    };

    this.insertAt = function (value, index) {
        let theRestofList = list;
        if (index == 0) {
            list = new Node(value, theRestofList);
        } else {
            let prev = null;
            let tmp = list;
            let num = 0;
            while (tmp.next != null) {
                prev = tmp; //previous list
                tmp = tmp.next; // the rest of linkedlist
                num++;
                if (num == index) {
                    prev.next = new Node(value, tmp);
                }
            }
        }
    };

    this.removeAt = function (index) {
        let tmp = list;
        let prev = null;
        let num = 0;
        let nextNode = list.next;
        if (num == 0) {
            list = nextNode;
        }
        while (tmp.next != null) {
            prev = tmp; //previous list
            tmp = tmp.next; // the rest of linkedlist
            num++;
            if (num == index) {
                prev.next = tmp.next;
            }
        }
    };
}

export { Node, LinkedList };
