# Event manager

The application allows you to record and plan events in advance.

### Smart Contract

- `total()` - Returns total count of events.
- `add(date, text, color)` - Adds a new event.
- `update(id, date, text, color)` - Updates an existing event.
- `delete(id)` - Deletes the event.
- `get(limit, offset)` - Returns the specified number of events.
- `getByWallet(wallet)` - Returns all events of the user with the specified wallet.
