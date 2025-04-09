// AUTHORIZATION ----------------------------------------------------------------------

// var requestBody = ""; 

// var client=new XMLHttpRequest();
// client.open("get","https://bccrdev.service-now.com/api/now/v1/cs/consumerAccount/unreadMessage?sysparm_limit=1&sysparm_return_only=count");

// client.setRequestHeader('Accept','application/json');
// client.setRequestHeader('Content-Type','application/json');

// //Eg. UserName="admin", Password="admin" for this code sample.
// client.setRequestHeader('Authorization', 'Basic '+btoa('victor.guzman'+':'+'Latam@21'));

// /* client.onreadystatechange = function() { 
// 	if(this.readyState == this.DONE) {
// 		document.getElementById("response").innerHTML=this.status + this.response; 
// 	}
// };  */
// client.send(requestBody);

// --------------------------------------------------------------------------------
console.log('Hello from child!');

/* window.addEventListener('message', event => {
	// IMPORTANT: check the origin of the data!
	if (event.origin === 'https://bccrdev.service-now.com') {
		// The data was sent from your site.
		// Data sent with postMessage is stored in event.data:
		console.log(event.data);
		console.log(event);

	} else {
		// The data was NOT sent from your site!
		// Be careful! Do not use it. This else branch is
		// here just for clarity, you usually shouldn't need it.
		return;
	}	
});  */

// window.contentWindow.postMessage('http://127.0.0.1:5500');

import ServiceNowChat from "https://bccrdev.service-now.com/uxasset/externals/now-requestor-chat-popover-app/index.jsdbx?sysparm_substitute=false";

/* window.parent.postMessage( {action:"getSessionID"} , "*");

window.addEventListener('message', event => {
	// IMPORTANT: check the origin of the data!
	if (event.origin === 'https://bccrdev.service-now.com') {
		// The data was sent from your site.
		// Data sent with postMessage is stored in event.data:
		console.log(event.data);
		console.log(event);

	} else {
		// The data was NOT sent from your site!
		// Be careful! Do not use it. This else branch is
		// here just for clarity, you usually shouldn't need it.
		return;
	}	
});  */

const chat = new ServiceNowChat({
	instance: 'https://bccrdev.service-now.com',
	// headers: {
	// 	'Content-Type': 'application/json',
	// 	'Authorization': 'Basic xxxxxxxxx',
	// },
	context: {
		// skip_load_history: 1,
		branding_key: "scp_bccr_branding",
		skip_load_history: false,
		load_active_only: true,
		portal: 'scp',
		live_agent_queue: 'e25db237c301565004c8322c0501315d',
		default_topic: 'b6512af8c3599a90df41e7deb00131ac',
		// lang: 'es',
		lang: 'esp',
		// language: 'esp',
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
	if (/Mobi|Android|iPhone|iPad|iPod/.test(userAgent)) {
		return "Mobile";
	} else {
		return "Desktop";
	}
}

/* console.log(ServiceNowChat);
console.log(chat); */

window.addEventListener('message', event => {
	// IMPORTANT: check the origin of the data!
	if (event.origin === 'https://bccrdev.service-now.com') {
		// The data was sent from your site.
		// Data sent with postMessage is stored in event.data:
/* 		console.log(event.data);
		console.log(event); */

		window.parent.postMessage('Mensaje de prueba', 'http://127.0.0.1:5500');
		if(event.data==="POST_MESSAGE_FROM_IFRAME"){
			// window.location.href = "https://<your-instance>.service-now.com/sn_va_web_client_login.do?sysparm_redirect_uri=<your-page>";
			}

	} else {
		// The data was NOT sent from your site!
		// Be careful! Do not use it. This else branch is
		// here just for clarity, you usually shouldn't need it.
		return;
	}	
});


// VA Bubble button element
const chatBtn = document.querySelector("now-requestor-chat-popover");

// Show the browser type and device
chatBtn.addEventListener('click', () => {
	alert(getBrowserInfo());
	alert(getDeviceType());

	if (getBrowserInfo == 'Apple Safari') {

	}

	if (chatBtn && chatBtn.shadowRoot) {

		console.log("INSIDE");
		console.log(chatBtn.shadowRoot);
        // Now you can query inside the shadow DOM
        const dialog = chatBtn.shadowRoot.querySelector('now-modeless-dialog');
        if (!dialog) {
			console.error('now-modeless-dialog not found');
			return;
		  }
		console.log(dialog)

		setTimeout(() => {
			console.log("After Timeout")
			console.log(chatBtn.shadowRoot.querySelector('now-modeless-dialog'));
			// console.log(chatBtn.shadowRoot.querySelector('now-modeless-dialog'));
			const nowModelessDialog = chatBtn.shadowRoot.querySelector('now-modeless-dialog');
			console.log(nowModelessDialog.querySelector('iframe'));

 			const iframe = nowModelessDialog.querySelector('iframe');
/* 			console.log(iframe);

			const iframeDocument = iframe.contentWindow.document;
			console.log(iframeDocument);  */

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
			warningContainer.addEventListener('click', () => 
			{
				const message = `Se encontró una incompatibilidad con tu dispositivo.

				Por favor, revisa el artículo de conocimiento.

				Si ya efectuó el proceso, puede hacer caso omiso.`;

				const shouldOpen = confirm(message);

				if (shouldOpen) {
				window.open(
					'https://bccrdev.service-now.com/scp?id=kb_article_view&sys_kb_id=58fbabe693af8a948d2ab84efaba10dd',
					'_blank'
				);
				}
			}
			)
				
			/*	() => {
				alert
				window.open('https://bccrdev.service-now.com/scp?id=kb_article_view&sys_kb_id=58fbabe693af8a948d2ab84efaba10dd', '_blank');
			});*/

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

		}, 3000);

    } else {
        console.warn("Shadow DOM not accessible or not yet initialized.");
    }



})


// Wait for the element to be available in the DOM
function addButtonToHeader() {
    const vaClient = document.querySelector("now-modeless-dialog"); // Get the PVA component

    if (vaClient) {
        const shadowRoot = vaClient.shadowRoot; // Access the shadow DOM
        if (shadowRoot) {
            const header = shadowRoot.querySelector(".sn-cs-header"); // Find the header
            if (header && !shadowRoot.querySelector(".custom-button")) {
                // Create the button
                const button = document.createElement("button");
                button.innerText = "Custom Action";
                button.className = "custom-button";
                button.style.marginLeft = "10px";
                button.onclick = () => alert("Button Clicked!");

                // Append the button to the header
                header.appendChild(button);
                console.log("Button added to header!");
            } else if (!header) {
                console.warn("Header element not found in shadow DOM.");
            }
        } else {
            console.warn("Shadow root not found for vaClient.");
        }
    } else {
        console.warn("sn-component-va-web-client not found.");
    }
}

/*
// Use MutationObserver to detect when the Virtual Agent loads
const observer = new MutationObserver(() => {
    addButtonToHeader();
});

// Start observing changes in the body
observer.observe(document.body, { childList: true, subtree: true });

// Also, attempt to run the function immediately
setTimeout(addButtonToHeader, 2000);
*/
