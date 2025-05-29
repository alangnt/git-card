document.getElementById('create-card').addEventListener('click', async () => {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	const isGitHubRepo = /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/.test(tab.url);
	
	if (isGitHubRepo) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			func: () => {
				const repoUrl = window.location.href;
				
				const match = repoUrl.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/?#]+)/);
				if (!match) return;
				
				const repoUser = match[1];
				const repoName = match[2];
				
				window.open(`https://gitportal.com/extension?gitUser=${repoUser}&gitRepo=${repoName}`, '_blank');
			}
		});
	} else {
		alert("Not a valid GitHub repository page.");
	}
});
