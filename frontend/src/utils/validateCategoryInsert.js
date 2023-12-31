const validateCategoryInsert = {
    name(name){
        if(name === null || name === undefined){
            return "This is a required field"
        }
        if( name.trim() === ""){
            return "This is a required field"
        }
        if (name.length > 50 ) {
            return 'max 50 characters';
        }
        let regex = /[`;:^'"\\,./!@#$%&*()_+=|<>?{}~\][]/g;
        let regex2 = /[áàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]/
        let character= /^[-0-9a-zA-Z\s]+$/;
        if(!character.test(name)){
            return 'Cannot special characters';
        }
        if (regex.test(name)) {
            return 'Cannot special characters';
        }
        if (regex2.test(name.toLocaleLowerCase())) {
            return 'Do not use Vietnamese accents';
        }
        return "success";
    },

    prefix(prefix){
        if(prefix === null || prefix === undefined){
            return "This is a required field"
        }
        if (prefix.trim() === '') {
            return 'This is a required field';
        }
        if (prefix.trim().length  !== 2 ) {
            return 'prefix only 2 characters';
        }
        let regex = /[`^;:'"\\,./!@#$%&*()_+=|<>?{}~\][]/g;
        let regex2 = /[áàảạãăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]/
        let character= /^[0-9a-zA-Z\s]+$/;
        if(!character.test(prefix)){
            return 'Cannot special characters';
        }
        if (regex.test(prefix)) {
            return 'Cannot special characters';
        }
        if (regex2.test(prefix.toLocaleLowerCase())) {
            return 'Do not use Vietnamese accents';
        }
        return "success";
    }
}


export default validateCategoryInsert;