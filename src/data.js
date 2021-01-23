import { v4 as uuidv4 } from 'uuid';
function chillHop() {
	return [
		{
			id: uuidv4(),
			name: 'Radio Kantipur',
			logo: 'https://radio-jcss-cdn.ekantipur.com/images/kfm_logo.png',
			audio: 'http://broadcast.radiokantipur.com:7248/stream/',
			active: true,
		},
		{
			id: uuidv4(),
			name: 'Kalika FM',
			logo: 'https://cdn-radiotime-logos.tunein.com/s48026g.png',
			audio: 'http://kalika-stream.softnep.com:7740/;',
			active: false,
		},
		{
			id: uuidv4(),
			name: 'Radio Nepal',
			logo:
				'https://nepaliradioapp.com/assets/uploads/radios/radio-nepal-radio.png',
			audio: 'http://radionepal.gov.np:40100/stream',
			active: false,
		},
		{
			id: uuidv4(),
			name: 'Ujyaalo 90 Network',
			logo:
				'https://static-media.streema.com/media/cache/de/39/de395c2cef8231ce24009ace8d2c63a7.jpg',
			audio: 'https://stream.zeno.fm/h527zwd11uquv',
			active: false,
		},
		{
			id: uuidv4(),
			name: 'Hits FM',
			logo:
				'https://static-media.streema.com/media/cache/a5/d8/a5d827f31d007b629c059f19f35cb59b.jpg',
			audio: 'https://usa15.fastcast4u.com/proxy/hitsfm912?mp=/1',
			active: false,
		},
		{
			id: uuidv4(),
			name: 'Radio Audio',
			logo: 'https://cdn-profiles.tunein.com/s105813/images/logog.png',
			audio: 'https://stream.zeno.fm/fvrx47wpg0quv',
			active: false,
		},
		{
			id: uuidv4(),
			name: 'Radio Sargam',
			logo:
				'https://dbs.radioline.fr/pictures/radio_9200531592563d9877ba40068699b22f/logo200.jpg?size=600',
			audio: 'http://rstream.abgroupnepal.com:8000/radiosargam',
			active: false,
		},
	];
}

export default chillHop;
