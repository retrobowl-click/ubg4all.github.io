
var hostname = window.location.hostname;
if (hostname.indexOf("dev1v1") >= 0 || hostname.indexOf("dev.1v1") >= 0 || hostname.indexOf("test1v1") >= 0 || hostname.indexOf("test.1v1") >= 0 || hostname.indexOf("localhost") >= 0) {
  initializeFireBaseDev();
} else {
  initializeFireBase();
}

initRemoteConfig();
