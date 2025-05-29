// popup.js
document.getElementById('create-card').addEventListener('click', async () => {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	const isGitHubRepo = /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/.test(tab.url);
	
	if (isGitHubRepo) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			func: () => {
				const repoUrl = window.location.href;
				
				const params = new URLSearchParams({
					url: repoUrl
				});
				
				window.open(`https://gitportal.com/extension?gitLink=${params.toString()}`, '_blank');
			}
		});
	} else {
		alert("Not a valid GitHub repository page.");
	}
});
