Sterling is a hedge fund that publishes market commentary and portfolio positioning updates to its investor base. We will use the X API exclusively to post original market insights and fund updates to our institutional audience.

**Scope of Use**

We will use only the POST /2/tweets endpoint to publish authored content. We do not use the API to read, scrape, analyze, or interact with other users' content. No follows, likes, retweets, DMs, user lookups, or read operations are performed.

**Content**

Posts are distilled from internal investor relations materials and include high-level directional market commentary, sector positioning themes, and macro outlooks. Content is generated internally by our investment and communications team, then reviewed and approved before posting. We never share proprietary detail—no specific positions, allocation percentages, entry/exit prices, or trading levels are disclosed.

**Publication Pattern**

Posts occur via automated script (triggered by our internal document pipeline) on weekdays only. Volume is low and predictable: typically 1–3 individual tweets or one short thread per business day. All content is authored and human-reviewed before it reaches the posting automation.

**Compliance**

All posting activity is logged internally for audit purposes. Our API calls are made under a single service account dedicated to this function. No third-party tools or integration partners have access to our credentials. We comply with X's terms regarding financial services accounts and content policies.
