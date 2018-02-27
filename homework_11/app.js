var rootNode = document.getElementById("root");

// functions for creation a treeView 
function createElement(element, className, content) {
    var elem = document.createElement(element);
    
    if (className) {
        elem.setAttribute('class', className);
    }
    if (content) {
        elem.innerHTML = content;
    }
    
    return elem;
  }

function createIcon(iconName) {
    var icon = document.createElement('icon');
    
    if (iconName) {
        icon.setAttribute('class', 'material-icons');
        icon.textContent = iconName;
    }
    return icon;
}

var createTreeView = data => {
    var ul = document.createElement('ul');

    for (var i = 0; i < data.length; i++) {
        //create a folder and a title
        if (data[i].folder) {
            var li = createElement('li', 'folder');
            
            if (data[i].title) {
                var folderIcon = createIcon('folder');
                var folderName = createElement('p', 'folder-name', data[i].title);
                
                folderName.appendChild(folderIcon);
                li.appendChild(folderName);
            }
        } else {
            if (data[i].title) {
                var li = createElement('li', 'file-item', data[i].title);
                var fileIcon = createIcon('insert_drive_file');
                
                li.appendChild(fileIcon);
            }
        }

        //if folder contains other files or subfolders
        if (data[i].children) {
            var subfolder = createTreeView(data[i].children);
            
            if (subfolder) {
                subfolder.setAttribute('class', 'subfolder');
                
                li.appendChild(subfolder);
            }
        } else{ 
            var p = document.createElement('p');
            
            p.innerHTML = 'Folder is empty';
            p.setAttribute('class', 'empty-folder');
            
            li.appendChild(p);
        }
        //add to list
        ul.appendChild(li);
    }
    return ul;
}

//create a treeView
rootNode.appendChild(createTreeView(structure));

//handle events
var folderName = document.querySelectorAll('.folder-name');
if (folderName) {
    folderName.forEach(e => {
        e.addEventListener('click', (e) => {
            //mark all buttons as 'open'
            e.target.parentNode.classList.toggle('open');
            var icon = e.target.querySelector('.material-icons');
        
            //if user clicks the folder change its icon
            if(icon.textContent === 'folder_open'){
                icon.textContent = 'folder';
            } else{
                icon.textContent = 'folder_open';   
            }
        })
    })
}