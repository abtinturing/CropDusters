<script>
	import Navbar from '$lib/Navbar.svelte';
import '../app.css';
	 import { ModeWatcher } from "mode-watcher";
	
</script>

<ModeWatcher defaultMode={"light"}/>
<Navbar/>
<slot></slot>
