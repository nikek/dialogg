
var hugeBlobOfThings = [
{ time: "2015-08-19T14:14:00.000Z", type: 1, val: 8.8 },
{ time: "2015-08-19T14:01:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-19T14:23:00.000Z", type: 1, val: 8.7 },
{ time: "2015-08-19T14:29:00.000Z", type: 1, val: 8.7 },
{ time: "2015-08-19T14:17:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-19T14:35:00.000Z", type: 1, val: 9.0 },
{ time: "2015-08-19T14:32:00.000Z", type: 0, val: 9.0 },
{ time: "2015-08-19T15:01:00.000Z", type: 1, val: 9.5 },
{ time: "2015-08-19T14:47:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-19T15:08:00.000Z", type: 1, val: 10.1 },
{ time: "2015-08-19T15:02:00.000Z", type: 0, val: 10.1 },
{ time: "2015-08-19T15:17:00.000Z", type: 0, val: 10.8 },
{ time: "2015-08-19T15:33:00.000Z", type: 4, val: 1.0 },
{ time: "2015-08-19T15:33:00.000Z", type: 1, val: 11.1 },
{ time: "2015-08-19T15:32:00.000Z", type: 0, val: 10.9 },
{ time: "2015-08-19T15:47:00.000Z", type: 0, val: 10.9 },
{ time: "2015-08-19T16:02:00.000Z", type: 1, val: 11.4 },
{ time: "2015-08-19T16:03:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-19T16:18:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-19T16:45:00.000Z", type: 1, val: 10.6 },
{ time: "2015-08-19T16:32:00.000Z", type: 0, val: 10.9 },
{ time: "2015-08-19T16:48:00.000Z", type: 1, val: 10.4 },
{ time: "2015-08-19T16:53:00.000Z", type: 1, val: 10.3 },
{ time: "2015-08-19T16:48:00.000Z", type: 0, val: 10.8 },
{ time: "2015-08-19T17:03:00.000Z", type: 0, val: 10.7 },
{ time: "2015-08-19T17:18:00.000Z", type: 0, val: 9.9 },
{ time: "2015-08-19T17:37:00.000Z", type: 1, val: 8.9 },
{ time: "2015-08-19T17:40:00.000Z", type: 4, val: 5.0 },
{ time: "2015-08-19T17:40:00.000Z", type: 5, val: 1 },
{ time: "2015-08-19T17:40:00.000Z", type: 1, val: 8.8 },
{ time: "2015-08-19T17:32:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-19T17:47:00.000Z", type: 0, val: 8.2 },
{ time: "2015-08-19T18:02:00.000Z", type: 0, val: 8.7 },
{ time: "2015-08-19T18:17:00.000Z", type: 0, val: 9.6 },
{ time: "2015-08-19T18:42:00.000Z", type: 1, val: 10.6 },
{ time: "2015-08-19T18:32:00.000Z", type: 0, val: 10.4 },
{ time: "2015-08-19T18:47:00.000Z", type: 0, val: 10.4 },
{ time: "2015-08-19T19:02:00.000Z", type: 0, val: 10.4 },
{ time: "2015-08-19T19:17:00.000Z", type: 0, val: 10.8 },
{ time: "2015-08-19T19:34:00.000Z", type: 1, val: 12.6 },
{ time: "2015-08-19T19:36:00.000Z", type: 4, val: 2.0 },
{ time: "2015-08-19T19:36:00.000Z", type: 1, val: 12.7 },
{ time: "2015-08-19T19:33:00.000Z", type: 0, val: 12.4 },
{ time: "2015-08-19T19:48:00.000Z", type: 0, val: 13.6 },
{ time: "2015-08-19T20:03:00.000Z", type: 0, val: 14.3 },
{ time: "2015-08-19T20:18:00.000Z", type: 0, val: 14.9 },
{ time: "2015-08-19T20:33:00.000Z", type: 0, val: 15.1 },
{ time: "2015-08-19T20:48:00.000Z", type: 0, val: 15.0 },
{ time: "2015-08-19T21:03:00.000Z", type: 1, val: 15.3 },
{ time: "2015-08-19T21:06:00.000Z", type: 4, val: 4.0 },
{ time: "2015-08-19T21:06:00.000Z", type: 1, val: 15.4 },
{ time: "2015-08-19T21:03:00.000Z", type: 0, val: 15.7 },
{ time: "2015-08-19T21:18:00.000Z", type: 0, val: 16.0 },
{ time: "2015-08-19T21:33:00.000Z", type: 0, val: 14.7 },
{ time: "2015-08-19T21:48:00.000Z", type: 0, val: 12.8 },
{ time: "2015-08-19T22:03:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-19T22:18:00.000Z", type: 0, val: 10.1 },
{ time: "2015-08-19T22:40:00.000Z", type: 1, val: 9.9 },
{ time: "2015-08-19T22:41:00.000Z", type: 1, val: 9.9 },
{ time: "2015-08-19T22:33:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-19T22:56:00.000Z", type: 1, val: 7.1 },
{ time: "2015-08-19T22:48:00.000Z", type: 0, val: 8.1 },
{ time: "2015-08-19T23:06:00.000Z", type: 5, val: 1 },
{ time: "2015-08-19T23:06:00.000Z", type: 1, val: 6.9 },
{ time: "2015-08-19T23:03:00.000Z", type: 0, val: 6.9 },
{ time: "2015-08-19T23:25:00.000Z", type: 1, val: 5.2 },
{ time: "2015-08-19T23:18:00.000Z", type: 0, val: 5.0 },
{ time: "2015-08-19T23:33:00.000Z", type: 1, val: 4.3 },
{ time: "2015-08-19T23:35:00.000Z", type: 5, val: 1 },
{ time: "2015-08-19T23:35:00.000Z", type: 1, val: 4.4 },
{ time: "2015-08-19T23:47:00.000Z", type: 4, val: 1.0 },
{ time: "2015-08-19T23:47:00.000Z", type: 1, val: 7.2 },
{ time: "2015-08-19T23:33:00.000Z", type: 0, val: 5.6 },
{ time: "2015-08-19T23:48:00.000Z", type: 0, val: 7.9 },
{ time: "2015-08-20T00:03:00.000Z", type: 0, val: 9.3 },
{ time: "2015-08-20T00:18:00.000Z", type: 0, val: 9.7 },
{ time: "2015-08-20T00:33:00.000Z", type: 0, val: 10.1 },
{ time: "2015-08-20T00:48:00.000Z", type: 0, val: 9.7 },
{ time: "2015-08-20T01:03:00.000Z", type: 0, val: 9.3 },
{ time: "2015-08-20T01:18:00.000Z", type: 0, val: 9.3 },
{ time: "2015-08-20T01:33:00.000Z", type: 0, val: 8.6 },
{ time: "2015-08-20T01:48:00.000Z", type: 0, val: 8.1 },
{ time: "2015-08-20T02:03:00.000Z", type: 0, val: 8.2 },
{ time: "2015-08-20T02:18:00.000Z", type: 0, val: 8.6 },
{ time: "2015-08-20T02:33:00.000Z", type: 0, val: 8.6 },
{ time: "2015-08-20T02:48:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-20T03:03:00.000Z", type: 0, val: 9.5 },
{ time: "2015-08-20T03:22:00.000Z", type: 1, val: 9.9 },
{ time: "2015-08-20T03:19:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-20T03:34:00.000Z", type: 0, val: 8.3 },
{ time: "2015-08-20T03:49:00.000Z", type: 0, val: 8.2 },
{ time: "2015-08-20T04:04:00.000Z", type: 0, val: 8.8 },
{ time: "2015-08-20T04:19:00.000Z", type: 0, val: 9.6 },
{ time: "2015-08-20T04:34:00.000Z", type: 0, val: 9.4 },
{ time: "2015-08-20T04:49:00.000Z", type: 0, val: 8.9 },
{ time: "2015-08-20T05:04:00.000Z", type: 0, val: 8.7 },
{ time: "2015-08-20T05:19:00.000Z", type: 0, val: 8.6 },
{ time: "2015-08-20T05:39:00.000Z", type: 1, val: 9.1 },
{ time: "2015-08-20T05:35:00.000Z", type: 0, val: 8.5 },
{ time: "2015-08-20T05:50:00.000Z", type: 0, val: 8.6 },
{ time: "2015-08-20T06:05:00.000Z", type: 0, val: 8.8 },
{ time: "2015-08-20T06:20:00.000Z", type: 0, val: 9.1 },
{ time: "2015-08-20T06:35:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-20T06:50:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-20T07:05:00.000Z", type: 0, val: 9.3 },
{ time: "2015-08-20T07:20:00.000Z", type: 0, val: 9.4 },
{ time: "2015-08-20T07:35:00.000Z", type: 0, val: 9.4 },
{ time: "2015-08-20T07:50:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-20T08:05:00.000Z", type: 1, val: 9.2 },
{ time: "2015-08-20T08:04:00.000Z", type: 0, val: 9.9 },
{ time: "2015-08-20T08:28:00.000Z", type: 4, val: 4.0 },
{ time: "2015-08-20T08:28:00.000Z", type: 4, val: 22.0 },
{ time: "2015-08-20T08:28:00.000Z", type: 5, val: 1 },
{ time: "2015-08-20T08:28:00.000Z", type: 1, val: 10.6 },
{ time: "2015-08-20T08:33:00.000Z", type: 1, val: 11.2 },
{ time: "2015-08-20T08:20:00.000Z", type: 0, val: 10.7 },
{ time: "2015-08-20T08:35:00.000Z", type: 0, val: 11.4 },
{ time: "2015-08-20T08:50:00.000Z", type: 0, val: 12.2 },
{ time: "2015-08-20T09:05:00.000Z", type: 0, val: 12.8 },
{ time: "2015-08-20T09:20:00.000Z", type: 0, val: 11.4 },
{ time: "2015-08-20T09:35:00.000Z", type: 0, val: 10.5 },
{ time: "2015-08-20T09:50:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-20T10:08:00.000Z", type: 1, val: 12.2 },
{ time: "2015-08-20T10:04:00.000Z", type: 0, val: 12.1 },
{ time: "2015-08-20T10:32:00.000Z", type: 4, val: 2.0 },
{ time: "2015-08-20T10:32:00.000Z", type: 1, val: 12.6 },
{ time: "2015-08-20T10:20:00.000Z", type: 0, val: 12.2 },
{ time: "2015-08-20T10:40:00.000Z", type: 1, val: 12.3 },
{ time: "2015-08-20T10:35:00.000Z", type: 0, val: 12.4 },
{ time: "2015-08-20T10:50:00.000Z", type: 0, val: 12.3 },
{ time: "2015-08-20T11:13:00.000Z", type: 1, val: 11.4 },
{ time: "2015-08-20T11:04:00.000Z", type: 0, val: 11.7 },
{ time: "2015-08-20T11:19:00.000Z", type: 0, val: 11.0 },
{ time: "2015-08-20T11:34:00.000Z", type: 0, val: 10.6 },
{ time: "2015-08-20T12:00:00.000Z", type: 1, val: 9.6 },
{ time: "2015-08-20T12:01:00.000Z", type: 1, val: 9.6 },
{ time: "2015-08-20T11:50:00.000Z", type: 0, val: 10.2 },
{ time: "2015-08-20T12:11:00.000Z", type: 4, val: 6.0 },
{ time: "2015-08-20T12:11:00.000Z", type: 5, val: 1 },
{ time: "2015-08-20T12:11:00.000Z", type: 1, val: 9.6 },
{ time: "2015-08-20T12:05:00.000Z", type: 0, val: 9.0 },
{ time: "2015-08-20T12:27:00.000Z", type: 1, val: 8.9 },
{ time: "2015-08-20T12:20:00.000Z", type: 0, val: 9.3 },
{ time: "2015-08-20T12:35:00.000Z", type: 0, val: 10.4 },
{ time: "2015-08-20T12:50:00.000Z", type: 0, val: 11.5 },
{ time: "2015-08-20T13:05:00.000Z", type: 0, val: 12.9 },
{ time: "2015-08-20T13:20:00.000Z", type: 0, val: 13.6 },
{ time: "2015-08-20T13:35:00.000Z", type: 0, val: 13.6 },
{ time: "2015-08-20T13:50:00.000Z", type: 1, val: 12.7 },
{ time: "2015-08-20T13:50:00.000Z", type: 0, val: 12.3 },
{ time: "2015-08-20T14:14:00.000Z", type: 1, val: 11.1 },
{ time: "2015-08-20T14:05:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-20T14:20:00.000Z", type: 0, val: 11.2 },
{ time: "2015-08-20T14:35:00.000Z", type: 0, val: 11.2 },
{ time: "2015-08-20T14:50:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-20T15:05:00.000Z", type: 1, val: 11.6 },
{ time: "2015-08-20T15:05:00.000Z", type: 0, val: 11.6 },
{ time: "2015-08-20T15:20:00.000Z", type: 0, val: 11.4 },
{ time: "2015-08-20T15:35:00.000Z", type: 0, val: 11.6 },
{ time: "2015-08-20T16:03:00.000Z", type: 4, val: 2.0 },
{ time: "2015-08-20T16:03:00.000Z", type: 1, val: 11.7 },
{ time: "2015-08-20T15:51:00.000Z", type: 0, val: 11.7 },
{ time: "2015-08-20T16:06:00.000Z", type: 0, val: 11.6 },
{ time: "2015-08-20T16:21:00.000Z", type: 0, val: 11.5 },
{ time: "2015-08-20T16:36:00.000Z", type: 0, val: 11.3 },
{ time: "2015-08-20T16:51:00.000Z", type: 0, val: 11.2 },
{ time: "2015-08-20T17:12:00.000Z", type: 1, val: 10.8 },
{ time: "2015-08-20T17:06:00.000Z", type: 0, val: 10.8 },
{ time: "2015-08-20T17:25:00.000Z", type: 1, val: 10.3 },
{ time: "2015-08-20T17:21:00.000Z", type: 0, val: 10.6 },
{ time: "2015-08-20T17:44:00.000Z", type: 1, val: 9.9 },
{ time: "2015-08-20T17:36:00.000Z", type: 0, val: 10.4 },
{ time: "2015-08-20T17:51:00.000Z", type: 0, val: 10.8 },
{ time: "2015-08-20T18:06:00.000Z", type: 0, val: 10.3 },
{ time: "2015-08-20T18:21:00.000Z", type: 0, val: 8.8 },
{ time: "2015-08-20T18:43:00.000Z", type: 1, val: 7.4 },
{ time: "2015-08-20T18:45:00.000Z", type: 1, val: 7.6 },
{ time: "2015-08-20T18:36:00.000Z", type: 0, val: 7.9 },
{ time: "2015-08-20T18:52:00.000Z", type: 4, val: 5.0 },
{ time: "2015-08-20T18:52:00.000Z", type: 5, val: 1 },
{ time: "2015-08-20T18:52:00.000Z", type: 1, val: 7.5 },
{ time: "2015-08-20T18:51:00.000Z", type: 0, val: 7.2 },
{ time: "2015-08-20T19:06:00.000Z", type: 0, val: 6.9 },
{ time: "2015-08-20T19:21:00.000Z", type: 0, val: 7.0 },
{ time: "2015-08-20T19:36:00.000Z", type: 0, val: 7.3 },
{ time: "2015-08-20T19:51:00.000Z", type: 0, val: 7.2 },
{ time: "2015-08-20T20:06:00.000Z", type: 0, val: 8.0 },
{ time: "2015-08-20T20:21:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-20T20:36:00.000Z", type: 0, val: 10.2 },
{ time: "2015-08-20T20:51:00.000Z", type: 0, val: 11.5 },
{ time: "2015-08-20T21:06:00.000Z", type: 0, val: 12.8 },
{ time: "2015-08-20T21:21:00.000Z", type: 0, val: 13.8 },
{ time: "2015-08-20T21:41:00.000Z", type: 1, val: 15.3 },
{ time: "2015-08-20T21:36:00.000Z", type: 0, val: 15.8 },
{ time: "2015-08-20T21:51:00.000Z", type: 0, val: 16.9 },
{ time: "2015-08-20T22:06:00.000Z", type: 0, val: 17.0 },
{ time: "2015-08-20T22:21:00.000Z", type: 0, val: 17.2 },
{ time: "2015-08-20T22:47:00.000Z", type: 1, val: 16.0 },
{ time: "2015-08-20T22:37:00.000Z", type: 0, val: 15.8 },
{ time: "2015-08-20T22:52:00.000Z", type: 0, val: 14.5 },
{ time: "2015-08-20T23:07:00.000Z", type: 0, val: 13.1 },
{ time: "2015-08-20T23:22:00.000Z", type: 0, val: 12.4 },
{ time: "2015-08-20T23:48:00.000Z", type: 1, val: 12.1 },
{ time: "2015-08-20T23:37:00.000Z", type: 0, val: 12.8 },
{ time: "2015-08-20T23:52:00.000Z", type: 0, val: 12.1 },
{ time: "2015-08-21T00:20:00.000Z", type: 1, val: 9.4 },
{ time: "2015-08-21T00:07:00.000Z", type: 0, val: 10.5 },
{ time: "2015-08-21T00:30:00.000Z", type: 1, val: 8.7 },
{ time: "2015-08-21T00:22:00.000Z", type: 0, val: 9.2 },
{ time: "2015-08-21T00:37:00.000Z", type: 0, val: 8.1 },
{ time: "2015-08-21T00:52:00.000Z", type: 1, val: 7.7 },
{ time: "2015-08-21T00:53:00.000Z", type: 0, val: 7.6 },
{ time: "2015-08-21T01:08:00.000Z", type: 0, val: 7.1 },
{ time: "2015-08-21T01:23:00.000Z", type: 0, val: 7.2 },
{ time: "2015-08-21T01:38:00.000Z", type: 0, val: 7.7 },
{ time: "2015-08-21T01:53:00.000Z", type: 0, val: 8.0 },
{ time: "2015-08-21T02:08:00.000Z", type: 0, val: 8.2 },
{ time: "2015-08-21T02:23:00.000Z", type: 0, val: 8.2 },
{ time: "2015-08-21T02:38:00.000Z", type: 0, val: 7.7 },
{ time: "2015-08-21T02:53:00.000Z", type: 0, val: 7.1 },
{ time: "2015-08-21T03:08:00.000Z", type: 0, val: 6.9 },
{ time: "2015-08-21T03:23:00.000Z", type: 0, val: 7.1 },
{ time: "2015-08-21T03:38:00.000Z", type: 0, val: 7.1 },
{ time: "2015-08-21T03:53:00.000Z", type: 0, val: 7.2 },
{ time: "2015-08-21T04:08:00.000Z", type: 0, val: 7.4 },
{ time: "2015-08-21T04:23:00.000Z", type: 0, val: 7.2 },
{ time: "2015-08-21T04:38:00.000Z", type: 0, val: 6.7 },
{ time: "2015-08-21T04:53:00.000Z", type: 0, val: 6.2 },
{ time: "2015-08-21T05:08:00.000Z", type: 0, val: 5.7 },
{ time: "2015-08-21T05:23:00.000Z", type: 0, val: 5.4 },
{ time: "2015-08-21T05:38:00.000Z", type: 0, val: 5.6 },
{ time: "2015-08-21T05:53:00.000Z", type: 0, val: 5.9 },
{ time: "2015-08-21T06:08:00.000Z", type: 0, val: 6.2 },
{ time: "2015-08-21T06:23:00.000Z", type: 0, val: 6.1 },
{ time: "2015-08-21T06:38:00.000Z", type: 0, val: 5.8 },
{ time: "2015-08-21T06:53:00.000Z", type: 0, val: 5.9 },
{ time: "2015-08-21T07:08:00.000Z", type: 0, val: 5.8 },
{ time: "2015-08-21T07:23:00.000Z", type: 0, val: 5.9 },
{ time: "2015-08-21T07:38:00.000Z", type: 0, val: 6.1 },
{ time: "2015-08-21T07:57:00.000Z", type: 1, val: 5.2 },
{ time: "2015-08-21T07:53:00.000Z", type: 0, val: 5.8 },
{ time: "2015-08-21T08:08:00.000Z", type: 0, val: 5.9 }];

var sortFn = function(a,b) {
  if (a.time > b.time) {
    return -1;
  }
  else if (a.time < b.time) {
    return 1;
  }

  return 0;
};

hugeBlobOfThings.sort(sortFn);

var filterFn = function(thang) {
  return (thang.type === 0 || thang.type === 1) && new Date(thang.time).getTime() > new Date('2015-08-20T00:00:00.000+0200').getTime() && new Date(thang.time).getTime() < new Date('2015-08-20T23:59:59.999+0200').getTime();
}

var hist = hugeBlobOfThings.filter(filterFn);

console.log(hist.length);

// var measure = hugeBlobOfThings.filter(function(thang) {
//   return thang.type === 1;
// });

// var hej = hugeBlobOfThings.filter(function(thang) {
//   return thang.type === 2;
// });

// var bla = hugeBlobOfThings.filter(function(thang) {
//   return thang.type === 3;
// });

// var foo = hugeBlobOfThings.filter(function(thang) {
//   return thang.type === 4;
// });

// var kaj = hugeBlobOfThings.filter(function(thang) {
//   return thang.type === 5;
// });

// console.log(hist);
// console.log(measure);
// console.log(hej);
// console.log(bla);
// console.log(foo);
// console.log(kaj);


// // tex freestyle libre
// var fcm = {
//   time: "2015-08-19T14:14:00.000Z",
//   value: 7.6,

// }
//         id
//     userId
//     timestamp (new Date()).toJSON() // always JSON date UTC https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
//     geoLocation: {
//       // long,
//       // lat,
//       // displayName of location?
//     },
//     scanGlucose: 7.9 // BG always in mmol/L
//     stripGlucose: 5.6 // olika, eller enbart en "glucose"?? cgm (Continuous glucose monitoring), fgm (Flash Glucose Monitoring), fingersticks
//     notes // fritext
//     origin // vilken mätare? manuellt etc?
//     originalValues/editedValues: {
//      ... // if edited?  
//     }
//     importValues: {
//       ... // förhindra dubbelimport etc.
//     }

      var dialogJSON = {
        title: 'hej',
        id: 123,
        gcm: hist,
        glucose: [
          { time: "2015-08-19T14:14:00.000Z", val: 8.8 },
          { time: "2015-08-19T14:01:00.000Z", val: 8.9 },
          { time: "2015-08-19T14:23:00.000Z", val: 8.7 },
          { time: "2015-08-19T14:29:00.000Z", val: 8.7 },
          { time: "2015-08-19T14:17:00.000Z", val: 8.9 },
          { time: "2015-08-19T14:35:00.000Z", val: 9.0 },
          { time: "2015-08-19T14:32:00.000Z", val: 9.0 },
          { time: "2015-08-19T15:01:00.000Z", val: 9.5 },
          { time: "2015-08-19T14:47:00.000Z", val: 9.2 },
          { time: "2015-08-19T15:08:00.000Z", val: 10.1 },
          { time: "2015-08-19T15:02:00.000Z", val: 10.1 },
          { time: "2015-08-19T15:17:00.000Z", val: 10.8 },
          { time: "2015-08-19T15:33:00.000Z", val: 1.0 },
          { time: "2015-08-19T15:33:00.000Z", val: 11.1 },
          { time: "2015-08-19T15:32:00.000Z", val: 10.9 },
          { time: "2015-08-19T15:47:00.000Z", val: 10.9 },
          { time: "2015-08-19T16:02:00.000Z", val: 11.4 },
          { time: "2015-08-19T16:03:00.000Z", val: 11.3 },
          { time: "2015-08-19T16:18:00.000Z", val: 11.3 },
          { time: "2015-08-19T16:45:00.000Z", val: 10.6 },
          { time: "2015-08-19T16:32:00.000Z", val: 10.9 },
          { time: "2015-08-19T16:48:00.000Z", val: 10.4 },
          { time: "2015-08-19T16:53:00.000Z", val: 10.3 },
          { time: "2015-08-19T16:48:00.000Z", val: 10.8 },
          { time: "2015-08-19T17:03:00.000Z", val: 10.7 },
          { time: "2015-08-19T17:18:00.000Z", val: 9.9 },
          { time: "2015-08-19T17:37:00.000Z", val: 8.9 },
          { time: "2015-08-19T17:40:00.000Z", val: 5.0 },
          { time: "2015-08-19T17:40:00.000Z", val: 1 },
          { time: "2015-08-19T17:40:00.000Z", val: 8.8 },
          { time: "2015-08-19T17:32:00.000Z", val: 8.9 },
          { time: "2015-08-19T17:47:00.000Z", val: 8.2 },
          { time: "2015-08-19T18:02:00.000Z", val: 8.7 },
          { time: "2015-08-19T18:17:00.000Z", val: 9.6 },
          { time: "2015-08-19T18:42:00.000Z", val: 10.6 },
          { time: "2015-08-19T18:32:00.000Z", val: 10.4 },
          { time: "2015-08-19T18:47:00.000Z", val: 10.4 },
          { time: "2015-08-19T19:02:00.000Z", val: 10.4 },
          { time: "2015-08-19T19:17:00.000Z", val: 10.8 },
          { time: "2015-08-19T19:34:00.000Z", val: 12.6 },
          { time: "2015-08-19T19:36:00.000Z", val: 2.0 },
          { time: "2015-08-19T19:36:00.000Z", val: 12.7 },
          { time: "2015-08-19T19:33:00.000Z", val: 12.4 },
          { time: "2015-08-19T19:48:00.000Z", val: 13.6 },
          { time: "2015-08-19T20:03:00.000Z", val: 14.3 },
          { time: "2015-08-19T20:18:00.000Z", val: 14.9 },
          { time: "2015-08-19T20:33:00.000Z", val: 15.1 },
          { time: "2015-08-19T20:48:00.000Z", val: 15.0 },
          { time: "2015-08-19T21:03:00.000Z", val: 15.3 },
          { time: "2015-08-19T21:06:00.000Z", val: 4.0 },
          { time: "2015-08-19T21:06:00.000Z", val: 15.4 },
          { time: "2015-08-19T21:03:00.000Z", val: 15.7 },
          { time: "2015-08-19T21:18:00.000Z", val: 16.0 },
          { time: "2015-08-19T21:33:00.000Z", val: 14.7 },
          { time: "2015-08-19T21:48:00.000Z", val: 12.8 },
          { time: "2015-08-19T22:03:00.000Z", val: 11.3 },
          { time: "2015-08-19T22:18:00.000Z", val: 10.1 },
          { time: "2015-08-19T22:40:00.000Z", val: 9.9 },
          { time: "2015-08-19T22:41:00.000Z", val: 9.9 },
          { time: "2015-08-19T22:33:00.000Z", val: 8.9 },
          { time: "2015-08-19T22:56:00.000Z", val: 7.1 },
          { time: "2015-08-19T22:48:00.000Z", val: 8.1 },
          { time: "2015-08-19T23:06:00.000Z", val: 1 },
          { time: "2015-08-19T23:06:00.000Z", val: 6.9 },
          { time: "2015-08-19T23:03:00.000Z", val: 6.9 },
          { time: "2015-08-19T23:25:00.000Z", val: 5.2 },
          { time: "2015-08-19T23:18:00.000Z", val: 5.0 },
          { time: "2015-08-19T23:33:00.000Z", val: 4.3 },
          { time: "2015-08-19T23:35:00.000Z", val: 1 },
          { time: "2015-08-19T23:35:00.000Z", val: 4.4 },
          { time: "2015-08-19T23:47:00.000Z", val: 1.0 },
          { time: "2015-08-19T23:47:00.000Z", val: 7.2 },
          { time: "2015-08-19T23:33:00.000Z", val: 5.6 },
          { time: "2015-08-19T23:48:00.000Z", val: 7.9 },
          { time: "2015-08-20T00:03:00.000Z", val: 9.3 },
          { time: "2015-08-20T00:18:00.000Z", val: 9.7 },
          { time: "2015-08-20T00:33:00.000Z", val: 10.1 },
          { time: "2015-08-20T00:48:00.000Z", val: 9.7 },
          { time: "2015-08-20T01:03:00.000Z", val: 9.3 },
          { time: "2015-08-20T01:18:00.000Z", val: 9.3 },
          { time: "2015-08-20T01:33:00.000Z", val: 8.6 },
          { time: "2015-08-20T01:48:00.000Z", val: 8.1 },
          { time: "2015-08-20T02:03:00.000Z", val: 8.2 },
          { time: "2015-08-20T02:18:00.000Z", val: 8.6 },
          { time: "2015-08-20T02:33:00.000Z", val: 8.6 },
          { time: "2015-08-20T02:48:00.000Z", val: 8.9 },
          { time: "2015-08-20T03:03:00.000Z", val: 9.5 },
          { time: "2015-08-20T03:22:00.000Z", val: 9.9 },
          { time: "2015-08-20T03:19:00.000Z", val: 9.2 },
          { time: "2015-08-20T03:34:00.000Z", val: 8.3 },
          { time: "2015-08-20T03:49:00.000Z", val: 8.2 },
          { time: "2015-08-20T04:04:00.000Z", val: 8.8 },
          { time: "2015-08-20T04:19:00.000Z", val: 9.6 },
          { time: "2015-08-20T04:34:00.000Z", val: 9.4 },
          { time: "2015-08-20T04:49:00.000Z", val: 8.9 },
          { time: "2015-08-20T05:04:00.000Z", val: 8.7 },
          { time: "2015-08-20T05:19:00.000Z", val: 8.6 },
          { time: "2015-08-20T05:39:00.000Z", val: 9.1 },
          { time: "2015-08-20T05:35:00.000Z", val: 8.5 },
          { time: "2015-08-20T05:50:00.000Z", val: 8.6 },
          { time: "2015-08-20T06:05:00.000Z", val: 8.8 },
          { time: "2015-08-20T06:20:00.000Z", val: 9.1 },
          { time: "2015-08-20T06:35:00.000Z", val: 9.2 },
          { time: "2015-08-20T06:50:00.000Z", val: 9.2 },
          { time: "2015-08-20T07:05:00.000Z", val: 9.3 },
          { time: "2015-08-20T07:20:00.000Z", val: 9.4 },
          { time: "2015-08-20T07:35:00.000Z", val: 9.4 },
          { time: "2015-08-20T07:50:00.000Z", val: 9.2 },
          { time: "2015-08-20T08:05:00.000Z", val: 9.2 },
          { time: "2015-08-20T08:04:00.000Z", val: 9.9 },
          { time: "2015-08-20T08:28:00.000Z", val: 4.0 },
          { time: "2015-08-20T08:28:00.000Z", val: 22.0 },
          { time: "2015-08-20T08:28:00.000Z", val: 1 },
          { time: "2015-08-20T08:28:00.000Z", val: 10.6 },
          { time: "2015-08-20T08:33:00.000Z", val: 11.2 },
          { time: "2015-08-20T08:20:00.000Z", val: 10.7 },
          { time: "2015-08-20T08:35:00.000Z", val: 11.4 },
          { time: "2015-08-20T08:50:00.000Z", val: 12.2 },
          { time: "2015-08-20T09:05:00.000Z", val: 12.8 },
          { time: "2015-08-20T09:20:00.000Z", val: 11.4 },
          { time: "2015-08-20T09:35:00.000Z", val: 10.5 },
          { time: "2015-08-20T09:50:00.000Z", val: 11.3 },
          { time: "2015-08-20T10:08:00.000Z", val: 12.2 },
          { time: "2015-08-20T10:04:00.000Z", val: 12.1 },
          { time: "2015-08-20T10:32:00.000Z", val: 2.0 },
          { time: "2015-08-20T10:32:00.000Z", val: 12.6 },
          { time: "2015-08-20T10:20:00.000Z", val: 12.2 },
          { time: "2015-08-20T10:40:00.000Z", val: 12.3 },
          { time: "2015-08-20T10:35:00.000Z", val: 12.4 },
          { time: "2015-08-20T10:50:00.000Z", val: 12.3 },
          { time: "2015-08-20T11:13:00.000Z", val: 11.4 },
          { time: "2015-08-20T11:04:00.000Z", val: 11.7 },
          { time: "2015-08-20T11:19:00.000Z", val: 11.0 },
          { time: "2015-08-20T11:34:00.000Z", val: 10.6 },
          { time: "2015-08-20T12:00:00.000Z", val: 9.6 },
          { time: "2015-08-20T12:01:00.000Z", val: 9.6 },
          { time: "2015-08-20T11:50:00.000Z", val: 10.2 },
          { time: "2015-08-20T12:11:00.000Z", val: 6.0 },
          { time: "2015-08-20T12:11:00.000Z", val: 1 },
          { time: "2015-08-20T12:11:00.000Z", val: 9.6 },
          { time: "2015-08-20T12:05:00.000Z", val: 9.0 },
          { time: "2015-08-20T12:27:00.000Z", val: 8.9 },
          { time: "2015-08-20T12:20:00.000Z", val: 9.3 },
          { time: "2015-08-20T12:35:00.000Z", val: 10.4 },
          { time: "2015-08-20T12:50:00.000Z", val: 11.5 },
          { time: "2015-08-20T13:05:00.000Z", val: 12.9 },
          { time: "2015-08-20T13:20:00.000Z", val: 13.6 },
          { time: "2015-08-20T13:35:00.000Z", val: 13.6 },
          { time: "2015-08-20T13:50:00.000Z", val: 12.7 },
          { time: "2015-08-20T13:50:00.000Z", val: 12.3 },
          { time: "2015-08-20T14:14:00.000Z", val: 11.1 },
          { time: "2015-08-20T14:05:00.000Z", val: 11.3 },
          { time: "2015-08-20T14:20:00.000Z", val: 11.2 },
          { time: "2015-08-20T14:35:00.000Z", val: 11.2 },
          { time: "2015-08-20T14:50:00.000Z", val: 11.3 },
          { time: "2015-08-20T15:05:00.000Z", val: 11.6 },
          { time: "2015-08-20T15:05:00.000Z", val: 11.6 },
          { time: "2015-08-20T15:20:00.000Z", val: 11.4 },
          { time: "2015-08-20T15:35:00.000Z", val: 11.6 },
          { time: "2015-08-20T16:03:00.000Z", val: 2.0 },
          { time: "2015-08-20T16:03:00.000Z", val: 11.7 },
          { time: "2015-08-20T15:51:00.000Z", val: 11.7 },
          { time: "2015-08-20T16:06:00.000Z", val: 11.6 },
          { time: "2015-08-20T16:21:00.000Z", val: 11.5 },
          { time: "2015-08-20T16:36:00.000Z", val: 11.3 },
          { time: "2015-08-20T16:51:00.000Z", val: 11.2 },
          { time: "2015-08-20T17:12:00.000Z", val: 10.8 },
          { time: "2015-08-20T17:06:00.000Z", val: 10.8 },
          { time: "2015-08-20T17:25:00.000Z", val: 10.3 },
          { time: "2015-08-20T17:21:00.000Z", val: 10.6 },
          { time: "2015-08-20T17:44:00.000Z", val: 9.9 },
          { time: "2015-08-20T17:36:00.000Z", val: 10.4 },
          { time: "2015-08-20T17:51:00.000Z", val: 10.8 },
          { time: "2015-08-20T18:06:00.000Z", val: 10.3 },
          { time: "2015-08-20T18:21:00.000Z", val: 8.8 },
          { time: "2015-08-20T18:43:00.000Z", val: 7.4 },
          { time: "2015-08-20T18:45:00.000Z", val: 7.6 },
          { time: "2015-08-20T18:36:00.000Z", val: 7.9 },
          { time: "2015-08-20T18:52:00.000Z", val: 5.0 },
          { time: "2015-08-20T18:52:00.000Z", val: 1 },
          { time: "2015-08-20T18:52:00.000Z", val: 7.5 },
          { time: "2015-08-20T18:51:00.000Z", val: 7.2 },
          { time: "2015-08-20T19:06:00.000Z", val: 6.9 },
          { time: "2015-08-20T19:21:00.000Z", val: 7.0 },
          { time: "2015-08-20T19:36:00.000Z", val: 7.3 },
          { time: "2015-08-20T19:51:00.000Z", val: 7.2 },
          { time: "2015-08-20T20:06:00.000Z", val: 8.0 },
          { time: "2015-08-20T20:21:00.000Z", val: 9.2 },
          { time: "2015-08-20T20:36:00.000Z", val: 10.2 },
          { time: "2015-08-20T20:51:00.000Z", val: 11.5 },
          { time: "2015-08-20T21:06:00.000Z", val: 12.8 },
          { time: "2015-08-20T21:21:00.000Z", val: 13.8 },
          { time: "2015-08-20T21:41:00.000Z", val: 15.3 },
          { time: "2015-08-20T21:36:00.000Z", val: 15.8 },
          { time: "2015-08-20T21:51:00.000Z", val: 16.9 },
          { time: "2015-08-20T22:06:00.000Z", val: 17.0 },
          { time: "2015-08-20T22:21:00.000Z", val: 17.2 },
          { time: "2015-08-20T22:47:00.000Z", val: 16.0 },
          { time: "2015-08-20T22:37:00.000Z", val: 15.8 },
          { time: "2015-08-20T22:52:00.000Z", val: 14.5 },
          { time: "2015-08-20T23:07:00.000Z", val: 13.1 },
          { time: "2015-08-20T23:22:00.000Z", val: 12.4 },
          { time: "2015-08-20T23:48:00.000Z", val: 12.1 },
          { time: "2015-08-20T23:37:00.000Z", val: 12.8 },
          { time: "2015-08-20T23:52:00.000Z", val: 12.1 },
          { time: "2015-08-21T00:20:00.000Z", val: 9.4 },
          { time: "2015-08-21T00:07:00.000Z", val: 10.5 },
          { time: "2015-08-21T00:30:00.000Z", val: 8.7 },
          { time: "2015-08-21T00:22:00.000Z", val: 9.2 },
          { time: "2015-08-21T00:37:00.000Z", val: 8.1 },
          { time: "2015-08-21T00:52:00.000Z", val: 7.7 },
          { time: "2015-08-21T00:53:00.000Z", val: 7.6 },
          { time: "2015-08-21T01:08:00.000Z", val: 7.1 },
          { time: "2015-08-21T01:23:00.000Z", val: 7.2 },
          { time: "2015-08-21T01:38:00.000Z", val: 7.7 },
          { time: "2015-08-21T01:53:00.000Z", val: 8.0 },
          { time: "2015-08-21T02:08:00.000Z", val: 8.2 },
          { time: "2015-08-21T02:23:00.000Z", val: 8.2 },
          { time: "2015-08-21T02:38:00.000Z", val: 7.7 },
          { time: "2015-08-21T02:53:00.000Z", val: 7.1 },
          { time: "2015-08-21T03:08:00.000Z", val: 6.9 },
          { time: "2015-08-21T03:23:00.000Z", val: 7.1 },
          { time: "2015-08-21T03:38:00.000Z", val: 7.1 },
          { time: "2015-08-21T03:53:00.000Z", val: 7.2 },
          { time: "2015-08-21T04:08:00.000Z", val: 7.4 },
          { time: "2015-08-21T04:23:00.000Z", val: 7.2 },
          { time: "2015-08-21T04:38:00.000Z", val: 6.7 },
          { time: "2015-08-21T04:53:00.000Z", val: 6.2 },
          { time: "2015-08-21T05:08:00.000Z", val: 5.7 },
          { time: "2015-08-21T05:23:00.000Z", val: 5.4 },
          { time: "2015-08-21T05:38:00.000Z", val: 5.6 },
          { time: "2015-08-21T05:53:00.000Z", val: 5.9 },
          { time: "2015-08-21T06:08:00.000Z", val: 6.2 },
          { time: "2015-08-21T06:23:00.000Z", val: 6.1 },
          { time: "2015-08-21T06:38:00.000Z", val: 5.8 },
          { time: "2015-08-21T06:53:00.000Z", val: 5.9 },
          { time: "2015-08-21T07:08:00.000Z", val: 5.8 },
          { time: "2015-08-21T07:23:00.000Z", val: 5.9 },
          { time: "2015-08-21T07:38:00.000Z", val: 6.1 },
          { time: "2015-08-21T07:57:00.000Z", val: 5.2 },
          { time: "2015-08-21T07:53:00.000Z", val: 5.8 },
          { time: "2015-08-21T08:08:00.000Z", val: 5.9 }
        ]
      };
