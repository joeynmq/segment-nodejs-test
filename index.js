const Analytics = require('analytics-node');

// Pulls from an environment variable, or falls back to your test key if blank
const writeKey = process.env.SEGMENT_WRITE_KEY || 'XXXXXX';
const analytics = new Analytics(writeKey);

analytics.identify({
  anonymousId: '48d213bb-95c3-4f8d-af97-86b2b404dcfe',
  traits: {
    friends: 42
  }
});

analytics.track({
  anonymousId: '48d213bb-95c3-4f8d-af97-86b2b404dcfe',
  event: 'Item Purchased',
  properties: {
    revenue: 39.95,
    shippingMethod: '2-day'
  }
});

console.log("Events sent to Segment successfully!");