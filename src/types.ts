export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// Set type Whatever = Expand<SomeTypeUrInterestedIn> then hover over "Whatever"
// to see the properties in the type
