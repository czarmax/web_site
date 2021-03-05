import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'

export default class ScrollableContainer extends PureComponent {
    constructor() {
        super()

        this.state = {
            items: [...Array(7).keys()],
            hasOverflow: false,
            canScrollLeft: false,
            canScrollRight: false
        }

        this.handleClickAddItem = this.handleClickAddItem.bind(this)
        this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)

        this.checkForOverflow = this.checkForOverflow.bind(this)
        this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

        this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
        this.debounceCheckForScrollPosition = debounce(
            this.checkForScrollPosition,
            200
        )

        this.container = null
    }

    checkForScrollPosition() {}

    checkForOverflow() {}

    handleClickAddItem() {
        this.setState(state => {
            return {
                items: [...state.items, state.items.length]
            }
        })
    }

    handleClickRemoveItem() {
        this.setState(state => {
            return {
                items: state.items.slice(0, -1)
            }
        })
    }

    buildItems() {
        return this.state.items.map(item => {
            return (
                <li className="item" key={item}>
                    {item + 1}
                </li>
            )
        })
    }

    buildControls() {
        return (
            <div className="item-controls">
                <button type="button">Previous</button>

                <button type="button" onClick={this.handleClickAddItem}>
                    Add Item
                </button>

                <button type="button" onClick={this.handleClickRemoveItem}>
                    Remove Item
                </button>

                <button type="button">Next</button>
            </div>
        )
    }

    render() {
        return (
            <>
                <ul
                    className="item-container"
                    ref={node => {
                        this.container = node
                    }}
                >
                    {this.buildItems()}
                </ul>
                {this.buildControls()}
            </>
        )
    }
}