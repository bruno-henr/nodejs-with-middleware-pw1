/**
 * @typedef {Object} UserAddDTO
 * @property {string} name
 * @property {string} username
 */

/**
 * @typedef {Object} TechnologyAddDTO
 * @property {string} title
 * @property {string} deadline
*/

/**
 * @typedef {Object} TechnologyEditDTO
 * @property {string} title
 * @property {string} deadline
*/

/**
 * @typedef {Object} UserAddDTOReturn
 * @property {string} id
 * @property {string} name
 * @property {string} username
 * @property {Array} technologies
 */

/**
 * @typedef {Object} Technology
 * @property {string} id 
 * @property {string} title 
 * @property {boolean} studied 
 * @property {string} deadline 
 * @property {string} created_at 
 */

/**
 * @typedef {Object} User
 * @property {string} id 
 * @property {string} name 
 * @property {string} username 
 * @property {Technology[]} technologies 
 */
