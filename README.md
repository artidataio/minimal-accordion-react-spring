# minimal-accordion-react-spring

I started this project to explore the simplest possible way to create Accordion component with react-spring.
One of the most popular article written is : https://codesandbox.io/s/react-spring-accordion-ymljk.
While beautiful I feel like the code samples is too huge.
Besides, it includes other thing like flippping arrow animation.

Another code samples I find is: https://codesandbox.io/s/react-spring-accordion-jo9ur.
I feel like it goes beyond my use case with the use of ResizeObserver.

My final code on Accordion component is literally less than 30 lines.
It was based on this guide: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node.
We can then animate div based on scrollHeight which is a constant height even when the node gets hidden.

I think Accordion where there are multiple synchronized growing and hiding component like: https://mui.com/material-ui/react-accordion/#controlled-accordion can be easily replicated with useState in the parent component.

Hope, that yo find this code sample useful.
