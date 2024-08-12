<script>
	export let tag = '';
	export let title = '';
</script>

<div class="bg-white rounded shadow-md p-2">
	<span class="text-xs py-0.5 p-0.5 rounded font-bold text-white mb-3 inline-block">{tag}</span>
	<h6 class="text-sky-800 mb-3">{title}</h6>
	<div class="flex items-center">
		<div class="text-zinc-500 mr-2">
			<i class="fas fa-align-left"></i>
		</div>
	</div>
</div>
