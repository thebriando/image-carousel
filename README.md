The site is published [here](https://thebriando.github.io/image-carousel/).

# Part 1
I chose to use [Reactstrap](https://reactstrap.github.io/) as my library of choice for part 1 since it has a convenient [carousel component](https://reactstrap.github.io/components/carousel/) that does exactly what I need for the purposes of this use case. I chose to use the `<UncontrolledCarousel>` in particular because it has all the functionality that I need, and it performs the correct behavior when navigating with the arrows and with the automatic sliding. 

However, there were a few styling changes that I thought were necessary in order for this component to be intuitive. The arrows and indicators were white and are displayed directly on top of the images. This made the navigation hard to see with light-colored backgrounds, and impossible to see with white backgrounds, so I added box shadows to these elements to make them stand out.

# Part 2
After making the carousel for part 1, I tried to solve some of the issues I had with Reactstrap's carousel in my implementation. I placed all of the navigation controls outside of the image, so that they are more accessible to the user and don't get obscured by different colored images. 

The main functionality for this component is broken down into three functions: `next()` for going to the next image in the deck (or the first image if the current image is the last in the stack), `prev()` for going to the previous image in the stack (or the last image if the current image is the first image) and `change()` for changing the image using the selectors at the bottom. I also used lifecycle methods to control the automatic sliding.
