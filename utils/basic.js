import { ObjectId } from 'mongodb';

/**
 * Module with basic utilities
 */
const basicUtils = {
  /**
   * Checks if Id is Valid for Mongo
   * string|number id to be evaluated and return {boolean} true if valid, false if not
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
