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
      case 'String':
        return StringColumnType;
      default:
        return BaseColumnType;
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
   * Returns the settings component responsible for the column type
   */
  get columnSettingsComponent() {
    return 'NoColumnSettings';
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

  get columnSettingsComponent() {
    return 'NumberColumnSettings';
  }

  getNextValue() {
    let delta = this.max - this.min;
    let val = Math.random() * delta + parseInt(this.min);
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

export class StringColumnType extends BaseColumnType {
  constructor(amountCharacters = 20) {
    super('String');
    this.amountCharacters = amountCharacters;
  }

  getDescription() {
    return 'A string value';
  }

  getExamples() {
    return ['o6Pr5c1f6Ur0IG7YeIH9', 'sGkGjU3ceisKZU4D79FJ', '1FteBUVKxk6WRVb84VGL'];
  }

  get columnSettingsComponent() {
    return 'StringColumnSettings';
  }

  getNextValue() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = characters.length;
    const ret = [];
    for (let i = 0; i < this.amountCharacters; i++) {
      ret.push(characters.charAt(Math.floor(Math.random() * length)));
    }
    return ret.join('');
  }
}
