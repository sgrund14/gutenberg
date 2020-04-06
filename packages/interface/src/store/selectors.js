/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns the item that is enabled in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 *
 * @return {string} The item that is enabled in the passed scope and type.
 */
function getSingleEnableItem( state, itemType, scope ) {
	return get(
		state.enableItems.singleEnableItems,
		[ itemType, scope ],
		null
	);
}

/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} scope    Item scope.
 *
 * @return {string} The complementary area that is active in the given scope.
 */
export function getActiveComplementaryArea( state, scope ) {
	return getSingleEnableItem( state, 'complementaryArea', scope );
}

/**
 * Returns a boolean indicating if an item is enabled or not in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean} True if the item is enabled and false otherwise.
 */
function isMultipleEnabledItemEnabled( state, itemType, scope, item ) {
	return (
		get( state.enableItems.multipleEnableItems, [
			itemType,
			scope,
			item,
		] ) === true
	);
}

/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state    Global application state.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */
export function isItemPinned( state, scope, item ) {
	return isMultipleEnabledItemEnabled( state, 'pinnedItems', scope, item );
}
