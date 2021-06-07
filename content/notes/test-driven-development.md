# Test Driven Development
# Methods

1. Fake it (stub implementations)
2. obvious implementation

The reason to articulate it this way is that if you ever get blown away by 2, you can always fall back to 1 and KEEP MOVING.

# Three Steps

1. Write failing test
2. Write code to make test pass
3. Refactor mothafucka

# Iterative Speed

```json
brazil-build single-integration-test -DtestClass="com.amazon.amazonmusicqueueserviceecs.activity.addtoqueue.AddToQueueBoundaryTest"

brazil-build debug-single-integration-test -DtestClass="com.amazon.amazonmusicqueueserviceecs.activity.addtoqueue.AddToQueueBoundaryTest"

bb | grep ✘
```

brazil-build debug-single-integration-test -DtestClass="com.amazon.amazonmusicqueueserviceecs.activity.setshuffle.SetShuffleOrchestratorTest"

> Don’t depend on anything volatile like guis or services - [Clean Architecture](https://www.notion.so/Clean-Architecture-f3a58bdb34d84a3d91c344a45ad7ccc4)

# Structural coupling
Test for every production class and method
Tests are strongly coupled to production. 
 Prevents refactoring and makes code rigid. 

# humble data pattern
At architecture boundaries a humble data pattern will often exists. It basically divides classes into easy and hard to test division. Something like data conversions from services or databases. 

# captors
use in place of any() being passed into mocks
it captures any input being passed into the mock
and then you can assert on what you expect the input to be

```java
@Captor 
private ArgumentCaptor<IReportDevicePlaybackResponse> responseCaptor;

when(reportDevicePlaybackResponseConverter.convert(responseCaptor.capture())).thenReturn(externalResponse);

assertEquals(response, responseCaptor.getValue());
```

## potential issues
- make sure you verify values are called AFTER the subject method is actually ran...
