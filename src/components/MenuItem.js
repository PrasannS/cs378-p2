import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ menuItem }) => {
    const image_base = "images/";
    return (
        <div class="col-12 menu-item">
            <div class="row">
                <div class="col-4 pe-0">
                    <img class="menu-image" src={image_base+menuItem.imageName} alt={menuItem.title}/>
                </div>
                <div class="col-8">
                    <h4>{menuItem.title}</h4>
                    <p class="gray-text">{menuItem.description}</p>
                    <div class="row align-items-center">
                        <div class="col">
                            <h5>${menuItem.price}</h5>
                        </div>
                        <div class="col-4">
                            <button class="add-button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
