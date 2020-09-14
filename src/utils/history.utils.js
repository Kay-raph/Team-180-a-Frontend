import { createBrowserHistory } from 'history'

// Browser history stores the location in regular URLs. This is the standard for most web apps, but it requires some configuration on the server to ensure you serve the same app at multiple URLs.

const history = createBrowserHistory()

export default history
