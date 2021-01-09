export class LikeComponent {

    constructor (private _likesCount: number, private _isSelected:  boolean) {
        this._isSelected = _isSelected;
        this._likesCount = _likesCount;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick () {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }
}