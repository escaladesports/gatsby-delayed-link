# gatsby-delayed-link

A React component to render a delayed gatsby-link.

## Usage

```jsx
import Link from 'components/delayed-gatsby-link'

...

<Link 
	location={this.props.location} // Current location from template of page
	onClick={this.handleClick} // (optional) Click event for this component to apply animation classes
	delay={200} // Delay to perform navigate event (ms)
	to={href} // Destination of link
	className={class}
>
	{content}
</Link>
```
