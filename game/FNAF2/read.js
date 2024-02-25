

	// Detection of when the html file is ran locally.
	// You can remove this code for the final version
	if (window.location.protocol == "file:")
	{
		document.write('<div id="bloctxt">');
		document.write('<h1>The application cannot be run...</h1>');
		document.write('<p>HTML browsers do not allow you to launch data files directly from the file system.<br>');
		document.write('A drag & drop of the html file on a web-browser window will not work, on any machine.<br>');
		document.write('Please use the Build & Run option (it opens a local web server) to run your application,<br>')
		document.write('or upload your application folder to a remote web-server, and start it from there...</p>');
		document.write('</div>');
		throw new error("Cannot run application");
	}
  