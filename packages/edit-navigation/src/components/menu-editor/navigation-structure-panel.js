/**
 * WordPress dependencies
 */
import {
	__experimentalBlockNavigationToolbar as BlockNavigationToolbar,
	__experimentalBlockNavigationList as BlockNavigationList,
} from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function NavigationStructurePanel( { blocks } ) {
	const selectedBlockClientIds = useSelect( ( select ) =>
		select( 'core/block-editor' ).getSelectedBlockClientIds()
	);

	const { selectBlock } = useDispatch( 'core/block-editor' );

	return (
		<Panel>
			<PanelBody title={ __( 'Navigation structure' ) }>
				{ !! blocks.length && (
					<>
						<BlockNavigationToolbar />
						<BlockNavigationList
							blocks={ blocks }
							selectedBlockClientId={
								selectedBlockClientIds[ 0 ]
							}
							selectBlock={ selectBlock }
							showNestedBlocks
							showAppender
						/>
					</>
				) }
			</PanelBody>
		</Panel>
	);
}
