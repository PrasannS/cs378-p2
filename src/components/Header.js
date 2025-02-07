import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const Header = ({ img, label, slogan}) => {
    return (
        <div class='container'>
            <div class="row justify-content-center mb-1">
            <div class="col-9 text-center">
                <img class="img-fluid" src={img} alt="Campus Cafe"/>
            </div>
            </div>
            
            <div class="text-center mb-5">
                <p class="cursive-text mb-1">{slogan}</p>
                <h1 class="gray-text">{label}</h1>
            </div>
        </div>
    );
};

export default Header;
