$(function() {
	$('.obfuscated-email').each(function() {
		var $this = $(this);
		var em = $this.data('id') + '@oslagbar' + 'produktion.se';

		$this.text(em);

		if ($this.is('a')) {
			$this.attr('href', 'mailto:' + em);
		}
	});
});