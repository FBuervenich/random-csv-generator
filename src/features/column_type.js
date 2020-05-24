import { Util } from '@/features/util';

export class ColumnTypeRouter {
  static getClass(identifier) {
    switch (identifier) {
      case 'Blank':
        return BlankColumnType;
      case 'Number':
        return NumberColumnType;
      case 'Boolean':
        return BooleanColumnType;
      default:
        break;
    }
  }
}

/**
 * Base class for column types
 */
export class BaseColumnType {
  constructor(identifier) {
    this.identifier = identifier;

    // use its type as the initial name for a column
    this.name = identifier;

    this.uuid = Util.generateUUID();
  }

  setName(name) {
    this.name = name;
  }

  /**
   * Returns the name of the column type
   */
  getName() {
    return this.name;
  }

  /**
   * Returns a description of the column type
   */
  getDescription() {
    return 'No description';
  }

  /**
   * Returns examples of the column type
   */
  getExamples() {
    return [];
  }

  /**
   * Returns a random value for the column type
   */
  getNextValue() {
    return Math.random();
  }
}

/**
 * Column of type number
 */
export class NumberColumnType extends BaseColumnType {
  constructor(min = 0, max = 100, decimals = 0) {
    super('Number');

    this.min = min;
    this.max = max;
    this.decimals = decimals;
  }

  getDescription() {
    return 'A number';
  }

  getExamples() {
    return [3, 532, 7.56343, 748393];
  }

  getNextValue() {
    let delta = this.max - this.min;
    let val = Math.random() * delta + this.min;
    return val.toFixed(this.decimals);
  }
}

export class BlankColumnType extends BaseColumnType {
  constructor() {
    super('Blank');
  }

  getDescription() {
    return 'A blank value';
  }

  getNextValue() {
    return '';
  }
}

export class BooleanColumnType extends BaseColumnType {
  constructor() {
    super('Boolean');
  }

  getDescription() {
    return 'A boolean value (true or false)';
  }

  getExamples() {
    return [true, false];
  }

  getNextValue() {
    const ret = Math.random() >= 0.5;
    return ret;
  }
}
