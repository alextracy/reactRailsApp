class AllItems extends React.Component {

    constructor(props) {
        super(props);

    }

    handleDelete(id){
        this.props.handleDelete(id);
    }

    render() {
        const items = this.props.items.map(item => (
            <div key={item.id}>
                <Item
                    item={item}
                    handleDelete={this.handleDelete.bind(this, item.id)}
                />
            </div>
        ));

        return <div>{items}</div>
    }
};
