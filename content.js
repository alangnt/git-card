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
		const title = document.querySelector('strong.mr-2.flex-self-stretch')?.innerText;
		const description = document.querySelector('meta[name="description"]')?.content;
		const repoUrl = window.location.href;
		
		const params = new URLSearchParams({
			title: title || '',
			description: description || '',
			url: repoUrl
		});
		
		window.open(`https://your-gitportal.com/create?${params.toString()}`, '_blank');
	};
	
	document.body.appendChild(btn);
}
