jQuery( function ( $ ) {

	// Tooltips
	$( document.body ).on( 'init_tooltips', function() {
		$( '.tips, .help_tip, .evf-help-tip' ).tipTip( {
			'attribute': 'data-tip',
			'fadeIn': 50,
			'fadeOut': 50,
			'delay': 200
		} );
	} ).trigger( 'init_tooltips' );
});
