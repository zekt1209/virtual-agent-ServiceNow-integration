import ServiceNowChat from "https://bccrtest.service-now.com/uxasset/externals/now-requestor-chat-popover-app/index.jsdbx?sysparm_substitute=false"; 

var instanceServiceNow = 'https://bccrtest.service-now.com';

const chat = new ServiceNowChat({
	instance: instanceServiceNow,
	context: {
		// skip_load_history: 1,
		branding_key: "scp_bccr_branding",
		skip_load_history: false,
		load_active_only: true,
		portal: 'scp',
		live_agent_queue: 'e25db237c301565004c8322c0501315d',
		default_topic: 'b6512af8c3599a90df41e7deb00131ac',
		lang: 'esp',
	},
	branding: {
		bgColor: '#003764',
		// primaryColor: #003764,
		hoverColor: '#003764',
		activeColor: '#003764',
		// openIcon: 'chat_icon_bccr.png',
		closeIcon: 'logo_asistente_virtual_bccr.png',
		// sizeMultiplier: 1.6
	},
	offsetX: 25,
	offsetY: 15,
	position: 'right',
	translations: {
		'Open dialog': 'Open chat',
		'Open Chat. {0} unread message(s)': 'Click to openn',
		'Close chat.': 'Click to close',
	},
}); 

function getBrowserInfo() {
	const userAgent = navigator.userAgent;
	let browserName = "Unknown";
	if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) {
		browserName = "Google Chrome";
	} else if (userAgent.indexOf("Firefox") > -1) {
		browserName = "Mozilla Firefox";
	} else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
		browserName = "Apple Safari";
	} else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
		browserName = "Opera";
	} else if (userAgent.indexOf("Edg") > -1) {
		browserName = "Microsoft Edge";
	} else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
		browserName = "Internet Explorer";
	}
	return browserName;
}
function getDeviceType() {
	const userAgent = navigator.userAgent;
	if (/iPhone|iPad|iPod/.test(userAgent)) {
		return "ios mobile";
	} else {
		return "Desktop";
	}
}

// VA Bubble button element
const chatBtn = document.querySelector("now-requestor-chat-popover");

// Show the browser type and device
chatBtn.addEventListener('click', () => {
	
	if (chatBtn && chatBtn.shadowRoot) {

		// Check if browser is Safari or device is iOS
		 if (getBrowserInfo() == 'Apple Safari' || getDeviceType() == 'ios mobile') {
		
			setTimeout(() => {

				// Check if iframe is present
				const nowModelessDialog = chatBtn.shadowRoot.querySelector('now-modeless-dialog');
				const iframe = nowModelessDialog.querySelector('iframe');
	
				// Alert button creation process
				// 1. Create a wrapper div
				const wrapper = document.createElement('div');
				wrapper.style.position = 'relative';
				wrapper.style.width = iframe.style.width || '100%';
				wrapper.style.height = iframe.style.height || '600px';
	
				// 2. Insert the wrapper before the iframe
				iframe.parentNode.insertBefore(wrapper, iframe);
	
				// 3. Move the iframe inside the wrapper
				wrapper.appendChild(iframe);
	
				// Create warning bubble container
				const warningContainer = document.createElement('div');
				warningContainer.style.position = 'absolute';
				warningContainer.style.top = '5px';
				warningContainer.style.right = '80px';
				warningContainer.style.zIndex = '10';
				warningContainer.style.backgroundColor = '#1e1e1e';
				warningContainer.style.padding = '8px';
				warningContainer.style.borderRadius = '8px';
				warningContainer.style.cursor = 'pointer';
				warningContainer.style.boxShadow = '0 2px 6px rgba(0,0,0,0.5)';
				warningContainer.style.display = 'inline-flex';
				warningContainer.style.alignItems = 'center';
				warningContainer.style.justifyContent = 'center';
				warningContainer.classList.add('warning-icon-wrapper');
	
				// SVG warning icon
				const warningIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				warningIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
				warningIcon.setAttribute('width', '24');
				warningIcon.setAttribute('height', '24');
				warningIcon.setAttribute('viewBox', '0 0 24 24');
				warningIcon.innerHTML = `
				<path fill="#ffc107" d="M1 21h22L12 2 1 21z"/>
				<path fill="#1e1e1e" d="M13 18h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
				`;
				warningContainer.appendChild(warningIcon);
	
				// Tooltip element
				const tooltip = document.createElement('div');
				//tooltip.textContent = 'Check this warning!';
				tooltip.classList.add('custom-tooltip');
				warningContainer.appendChild(tooltip);
	
				// Add click handler
				warningContainer.addEventListener('click', () => {
					const message = 
					'Se encontró una incompatibilidad con su dispositivo.\n\n¿Desea ir al artículo de conocimiento para revisar el procedimiento?\n\nSi ya efectuó el proceso, puede omitir este mensaje. O bien si está en un dispositivo MacOS, puede utilizar el navegador Google Chrome';
	
					const shouldOpen = confirm(message);
	
					if (shouldOpen) {
						window.open(
							instanceServiceNow + '/scp?id=kb_article_view&sys_kb_id=58fbabe693af8a948d2ab84efaba10dd',
							'_blank');
					}
				});
	
				// Append warning icon container
				wrapper.appendChild(warningContainer);
	
				// Add CSS for tooltip
				const style = document.createElement('style');
				style.textContent = `
				.warning-icon-wrapper {
					position: relative;
				}
	
				.custom-tooltip {
					position: absolute;
					bottom: -35px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #333;
					color: #fff;
					padding: 6px 10px;
					border-radius: 4px;
					white-space: nowrap;
					font-size: 12px;
					opacity: 0;
					pointer-events: none;
					transition: opacity 0.2s ease;
				}
	
				.warning-icon-wrapper:hover .custom-tooltip {
					opacity: 1;
				}
				`;
				// Add CSS for tooltip
				document.head.appendChild(style);
	
			}, 500);
	
		} 

	} else {
		console.warn("Shadow DOM not accessible or not yet initialized.");
	}

})