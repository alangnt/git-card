function isRepoPage() {
	return /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/.test(window.location.href);
}

if (isRepoPage()) {
	const btn = document.createElement('button');
	btn.innerText = '🧩 GitPortal Card';
	btn.style.position = 'fixed';
	btn.style.bottom = '20px';
	btn.style.right = '20px';
	btn.style.zIndex = 10000;
	btn.style.padding = '10px';
	btn.style.background = '#24292e';
	btn.style.color = 'white';
	btn.style.borderRadius = '8px';
	btn.style.border = 'none';
	btn.style.cursor = 'pointer';
	
	btn.onclick = () => {
		const repoUrl = window.location.href;
		
		const match = repoUrl.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/?#]+)/);
		if (!match) return;
		
		const repoUser = match[1];
		const repoName = match[2];
		
		window.open(`https://gitportal.org/extension?gitUser=${repoUser}&gitRepo=${repoName}`, '_blank');
	};
	
	document.body.appendChild(btn);
}
