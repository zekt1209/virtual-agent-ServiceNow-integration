console.log('Hello World');


import ServiceNowChat from "https://bccrdev.service-now.com/uxasset/externals/now-requestor-chat-popover-app/index.jsdbx?sysparm_substitute=false";
// var chat = new ServiceNowChat({ instance: "https://dev266073.service-now.com", });

 var chat = new ServiceNowChat({
	instance: 'https://bccrdev.service-now.com',
	context: {
		// skip_load_history: 1,
		branding_key: "scp_bccr_branding",
		skip_load_history: false,
		load_active_only: true,
		portal: 'scp',
		live_agent_queue: 'e25db237c301565004c8322c0501315d',
		default_topic: 'b6512af8c3599a90df41e7deb00131ac',
		language: 'es',
	},
/* 	branding: {
		// bgColor: '#008cff',
		// primaryColor: '#ffefd5',
		// hoverColor: '#1b6e97',
		// activeColor: '#AAA',
		// openIcon: 'custom-open.svg',
		// closeIcon: 'custom-close.svg',
		// sizeMultiplier: 1.6
	}, */
	offsetX: 25,
	offsetY: 15,
	position: 'right',
	translations: {
		'Open dialog': 'Open chat',
		'Open Chat. {0} unread message(s)': 'Click to open',
		'Close chat.': 'Click to close',
	},
}); 